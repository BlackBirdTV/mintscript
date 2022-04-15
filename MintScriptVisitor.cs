using Antlr4.Runtime;
using Antlr4.Runtime.Misc;
using Microsoft.CodeAnalysis.CSharp.Scripting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.CodeDom;
using System.Runtime.InteropServices;
using System.Reflection;
using Newtonsoft.Json.Linq;

namespace MintScript
{
    public static class Extensions
    {
        public static int indexof(this object[] obja, object toFind)
        {
            for (int i = 0; i < obja.Length; i++)
                if (obja[i] == toFind)
                    return i;
            return -1;
        }
    }

    public enum TypeEnum
    {
        INT = 100,
        STRING = 101,
        FLOAT = 102,
        BOOL = 103,
    }

    public class AdvancedFunc<T, TResult>
    {
        public Func<T, TResult> func;
        public Dictionary<string, Type> argsBoilerplate;

        public AdvancedFunc(Func<T, TResult> func, Dictionary<string, Type> argsBoilerplate)
        {
            this.func = func;
            this.argsBoilerplate = argsBoilerplate;
        }
    }

    class MSVisitor : MintScriptBaseVisitor<object>
    {
        Dictionary<string, object> Variables { get; } = new Dictionary<string, object>();

        public MSVisitor()
        {
            Variables["print"]      =       new AdvancedFunc<object[], object>(print, new Dictionary<string, Type> { ["#1"] = typeof(object) });
            Variables["println"]    =       new AdvancedFunc<object[], object>(println, new Dictionary<string, Type> { ["#1"] = typeof(object) });
            Variables["read"]       =       new AdvancedFunc<object[], object>(read, new Dictionary<string, Type> { });
            Variables["readln"]     =       new AdvancedFunc<object[], object>(readln, new Dictionary<string, Type> { });
            Variables["contains"]   =       new AdvancedFunc<object[], object>(contains, new Dictionary<string, Type> { ["#1"] = typeof(object), ["#2"] = typeof(object) });
            Variables["wip.js"]     =       new AdvancedFunc<object[], object>(js, new Dictionary<string, Type> { ["#1"] = typeof(string) });
            Variables["str"]        =       new AdvancedFunc<object[], object>(str, new Dictionary<string, Type> { ["#1"] = typeof(object) });
            Variables["len"]        =       new AdvancedFunc<object[], object>(len, new Dictionary<string, Type> { ["#1"] = typeof(object) });
            Variables["pos"]        =       new AdvancedFunc<object[], object>(pos, new Dictionary<string, Type> { ["#1"] = typeof(object), ["#2"] = typeof(object) });
        }

        private object pos(object[] args)
        {
            return args[0] switch
            {
                object[] o => o.indexof(args[1]),
                string s => s.IndexOf(args[1].ToString()),
                _ => throw new NotImplementedException()
            };
        }

        private object len(object[] args)
        {
            return args[0] switch
            {
                string s => s.Length,
                object[] o => o.Length,
                _ => throw new NotImplementedException()
            };
        }

        private object str(object[] args)
        {
            return args[0].ToString();
        }

        private object js(object[] args)
        {
            var engine = new Jint.Engine()
                .SetValue("logln", new Action<object>(Console.WriteLine))
                .SetValue("log", new Action<object>(Console.Write))
                ;
            return engine.Execute(args[0].ToString());
        }

        private object contains(object[] args)
        {
            Console.WriteLine(args[0].ToString());
            if (args[0] is object[] o && (args[0] as object[]).Contains(args[1]))
                return true;
            if (args[0] is string s && s.Contains(args[1].ToString()))
                return true;
            return false;
        }

        private object print(object[] args)
        {
            Console.Write(args[0].ToString());

            return 0;
        }

        private object println(object[] args)
        {
            Console.WriteLine(args[0].ToString());

            return 0;
        }

        private object read(object[] args)
        {
            return Console.Read();
        }

        private object readln(object[] args)
        {
            return Console.ReadLine();
        }

        public override object VisitImportStatement([NotNull] MintScriptParser.ImportStatementContext context)
        {
            var hasFrom = context.expression() != null;
            var path = !hasFrom ? Path.Combine(Directory.GetCurrentDirectory(), $@"modules/{context.IDENTIFIER().GetText()}/{context.IDENTIFIER().GetText()}") : Visit(context.expression());
            if (!hasFrom && File.Exists(path + ".dll"))
            {
                var asm = Assembly.LoadFrom($"{path}.dll");
                var type = asm.GetType($"Exports");
                var imports = JObject.Parse(File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), $@"modules/{context.IDENTIFIER().GetText()}/module.json")));
                foreach (var import in imports["export_functions"])
                {
                    var method = type.GetMethod(import["method"].ToString(), new Type[] { typeof(object[]) });
                    object main(object[] args)
                    {
                        return method.Invoke(Activator.CreateInstance(type), new object[] { args });
                    }

                    Dictionary<string, Type> args = new();

                    var buf = import["args"].ToObject<string[]>();
                    for (int i = 0; i < buf.Length; i++)
                    {
                        args[$"#{i}"] = typeFromString(buf[i]);
                    }

                    Variables[context.IDENTIFIER().GetText() + "." + import["method"].ToString()] = new AdvancedFunc<object[], object>(main, args);
                }
            }
            else if (hasFrom && File.Exists(path.ToString()))
            {
                var asm = Assembly.LoadFrom(path.ToString());
                var type = asm.GetType("Exports");
                var imports = JObject.Parse(File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), path.ToString()[..path.ToString().LastIndexOf("/")] + "/module.json")));
                foreach (var import in imports["export_functions"])
                {
                    var method = type.GetMethod(import["method"].ToString(), new Type[] { typeof(object[]) });
                    object main(object[] args)
                    {
                        return method.Invoke(Activator.CreateInstance(type), new object[] { args });
                    }

                    Dictionary<string, Type> args = new();

                    var buf = import["args"].ToObject<string[]>();
                    for (int i = 0; i < buf.Length; i++)
                    {
                        args[$"#{i}"] = typeFromString(buf[i]);
                    }

                    Variables[context.IDENTIFIER().GetText() + "." + import["method"].ToString()] = new AdvancedFunc<object[], object>(main, args);
                }
            }
            else if (!hasFrom && File.Exists(path.ToString() + ".mis"))
            {
                AntlrInputStream inputStream = new AntlrInputStream(File.ReadAllText(path.ToString() + ".mis"));
                MintScriptLexer msLexer = new MintScriptLexer(inputStream);
                CommonTokenStream commonTokenStream = new CommonTokenStream(msLexer);
                MintScriptParser msParser = new MintScriptParser(commonTokenStream);
                MintScriptParser.ProgramContext msContext = msParser.program();
                MSVisitor visitor = new MSVisitor();
                visitor.Visit(msContext);
                for (int i = 0; i < visitor.Variables.Count; i++)
                {
                    Variables[context.IDENTIFIER() + "." + visitor.Variables.ElementAt(i).Key] = visitor.Variables.ElementAt(i).Value;
                }
            }
            else if (hasFrom && File.Exists(path.ToString()))
            {
                AntlrInputStream inputStream = new AntlrInputStream(File.ReadAllText(path.ToString()));
                MintScriptLexer msLexer = new MintScriptLexer(inputStream);
                CommonTokenStream commonTokenStream = new CommonTokenStream(msLexer);
                MintScriptParser msParser = new MintScriptParser(commonTokenStream);
                MintScriptParser.ProgramContext msContext = msParser.program();
                MSVisitor visitor = new MSVisitor();
                visitor.Visit(msContext);
                for (int i = 0; i < visitor.Variables.Count; i++)
                {
                    Variables[context.IDENTIFIER() + "." + visitor.Variables.ElementAt(i).Key] = visitor.Variables.ElementAt(i).Value;
                }
            }
            else
                throw new Exception("Module has not been found");

            return 0;
        }

        public override object VisitIndexIdentifierExpression([NotNull] MintScriptParser.IndexIdentifierExpressionContext context)
        {
            var varName = context.index_identifier().IDENTIFIER().GetText();
            var indices = context.index_identifier().INDEX().Select(a => int.Parse(a.GetText()[1..^1]));

            var value = Variables[varName];

            foreach(int index in indices)
            {
                if (value.GetType() != typeof(object[]))
                    throw new Exception("Element was not an array");
                value = (value as object[])[index];
            }

            return value;
        }

        public override object VisitConstant([NotNull] MintScriptParser.ConstantContext context)
        {
            if (context.INTEGER() is { } i)
                return int.Parse(i.GetText());

            if (context.FLOAT() is { } f)
                return float.Parse(f.GetText().Replace(".", ","));

            if (context.STRING() is { } s)
                return s.GetText()[1..^1];

            if (context.BOOL() is { } b)
                return b.GetText() == "true";

            object[] result = new object[0];

            if (context.array() is { } a) 
                return a.constant().Select(Visit).ToArray();

            throw new NotImplementedException();
        }

        public override object VisitIdentifierExpression([NotNull] MintScriptParser.IdentifierExpressionContext context)
        {
            var varName = context.IDENTIFIER().GetText();

            if(!Variables.ContainsKey(varName))
            {
                throw new Exception($"Variable {varName} is not defined");
            }

            return Variables[varName];
        }

        public override object VisitPowerExpression([NotNull] MintScriptParser.PowerExpressionContext context)
        {
            var left = Visit(context.expression(0));
            var right = Visit(context.expression(1));

            if (left is float lf && right is float rf)
                return (float)Math.Pow(lf, rf);
            if (left is int li && right is int ri)
                return (float)Math.Pow(li, ri);
            throw new Exception("Invalid type operation");
        }

        public static int Pow(int bas, int exp)
        {
            return Enumerable
                  .Repeat(bas, exp)
                  .Aggregate(1, (a, b) => a * b);
        }

        public override object VisitAdditiveExpression([NotNull] MintScriptParser.AdditiveExpressionContext context)
        {
            var left = Visit(context.expression(0));
            var right = Visit(context.expression(1));

            var op = context.addOp().GetText();

            return op switch
            {
                "+" => Add(left, right),
                "-" => Subtract(left, right),
                _ => throw new NotImplementedException()

            };
        }

        public override object VisitMultipierExpression([NotNull] MintScriptParser.MultipierExpressionContext context)
        {
            var left = Visit(context.expression(0));
            var right = Visit(context.expression(1));

            var op = context.multOp().GetText();

            return op switch
            {
                "*" => Multiply(left, right),
                "/" => Divide(left, right),
                _ => throw new NotImplementedException()

            };
        }

        public override object VisitWhileBlock([NotNull] MintScriptParser.WhileBlockContext context)
        {
            while (IsTrue(Visit(context.expression())))
            {
                Visit(context.block());
            }

            return 0;
        }

        public override object VisitIfBlock([NotNull] MintScriptParser.IfBlockContext context)
        {
            if (IsTrue(Visit(context.expression())))
            {
                Visit(context.block());
            }

            return 0;
        }

        public override object VisitElseIfBlock([NotNull] MintScriptParser.ElseIfBlockContext context)
        {
            return base.VisitElseIfBlock(context);
        }

        public bool IsTrue(object value)
        {
            if (value is bool b)
                return b;

            throw new Exception("Given value was not a boolean");
        }

        public Type typeFromString(string type)
        {
            return type switch
            {
                "float" => typeof(float),
                "number" => typeof(int),
                "string" => typeof(string),
                "bool" => typeof(bool),
                "tuple" => typeof(object[]),
                _ => throw new NotImplementedException(),
            };
        }

        public override object VisitFunctionBlock([NotNull] MintScriptParser.FunctionBlockContext context)
        {
            var name = context.IDENTIFIER(0).GetText();
            string[] args = context.IDENTIFIER().Where((x, i) => i % 2 == 0 && i != 0).Select(a => a.GetText()).ToArray();
            string[] type = context.IDENTIFIER().Where((x, i) => i % 2 != 0).Select(a => a.GetText()).ToArray();

            Dictionary<string, Type> args_dict = new();
            for (int i = 0; i < args.Length; i++)
            {
                args_dict[args[i]] = typeFromString(type[i]);
            }
            
            object function(object[] args)
            {
                object value = new();
                foreach (var line in context.block().line())
                {
                    value = Visit(line);
                }
                return value;
            }
            AdvancedFunc<object[], object> func = new AdvancedFunc<object[], object>(function, args_dict);

            Variables[name.ToString()] = func;
            return 0;
        }

        public override object VisitReturnStatement([NotNull] MintScriptParser.ReturnStatementContext context)
        {
            return Visit(context.expression());
        }

        public override object VisitFunctionCall([NotNull] MintScriptParser.FunctionCallContext context)
        {
            var name = context.IDENTIFIER().GetText();
            var args = context.expression().Select(Visit).ToArray();

            if(!Variables.ContainsKey(name))
                throw new Exception($"Function {name} does not exist");

            if (!(Variables[name] is AdvancedFunc<object[], object> func))
                throw new Exception($"Variable {name} is not of type \"Function\"");

            if (args.Length != func.argsBoilerplate.Count)
                throw new Exception("Amount of given arguments did not match amount of expexted arguments");

            for (int i = 0; i < args.Length; i++)
            {
                if (Variables.ContainsKey(func.argsBoilerplate.Keys.ElementAt(i)))
                    throw new Exception("Can't assign same name to in-function and out-of-function variables");

                if (func.argsBoilerplate.Values.ElementAt(i) != typeof(object) && func.argsBoilerplate.Values.ElementAt(i) != args[i].GetType())
                    throw new Exception("Mismatched types");


                Variables[func.argsBoilerplate.Keys.ElementAt(i)] = args[i];
            }

            object result = func.func(args);

            for (int i = 0; i < args.Length; i++)
            {
                Variables.Remove(func.argsBoilerplate.Keys.ElementAt(i));
            }

            return result;
        }

        public override object VisitComparisionExpression([NotNull] MintScriptParser.ComparisionExpressionContext context)
        {
            var left = Visit(context.expression(0));
            var right = Visit(context.expression(1));

            var op = context.compareOp().GetText();

            return op switch
            {
                "==" => IsEquals(left, right),
                "!=" => !IsEquals(left, right),
                ">" => Greater(left, right),
                "<" => Less(left, right),
                ">=" => GreaterEquals(left, right),
                "<=" => LessEquals(left, right),
                _ => throw new NotImplementedException()
            };
        }

        public override object VisitParenthesizedExpression([NotNull] MintScriptParser.ParenthesizedExpressionContext context)
        {
            return context.expression();
        }

        public override object VisitQuickAssignment([NotNull] MintScriptParser.QuickAssignmentContext context)
        {
            var varName = context.IDENTIFIER().GetText();
            var op = context.quickAssignOp().GetText();

            if (!Variables.ContainsKey(varName))
                throw new Exception($"Variable {varName} didn't exist");

            switch (Variables[varName])
            {
                case float f:
                    Variables[varName] = op switch{
                        "++" => f + 1,
                        "--" => f - 1,
                        _ => throw new NotImplementedException(),
                    };
                    break;

                case int i:
                    Variables[varName] = op switch
                    {
                        "++" => i + 1,
                        "--" => i - 1,
                        _ => throw new NotImplementedException(),
                    };
                    break;
            }
            return 0;
        }

        public override object VisitExpressionAssignment([NotNull] MintScriptParser.ExpressionAssignmentContext context)
        {
            var varName = context.IDENTIFIER().GetText();
            var op = context.assignOp().GetText();
            var value = Visit(context.expression());

            switch (op) 
            {
                case "=":
                    if (Variables.ContainsKey(varName) && Variables[varName].GetType() != value.GetType())
                        throw new Exception("Values were not of same type!");

                    Variables[varName] = value;
                    break;

                case "+=":
                    if (!Variables.ContainsKey(varName))
                        throw new Exception($"Variable {varName} didn't exist");

                    if (Variables[varName].GetType() == typeof(object[]))
                    {
                        Variables[varName] = (Variables[varName] as object[]).Concat(value.GetType() == typeof(object[]) ? value as object[] : new[] { value }).ToArray();
                        break;
                    }

                    if (Variables[varName].GetType() != value.GetType())
                        throw new Exception("Values were not of same type!");

                    switch (Variables[varName])
                    {
                        case float f:
                            Variables[varName] = f + (float)value;
                            break;

                        case int i:
                            Variables[varName] = i + (int)value;
                            break;

                        case string s:
                            Variables[varName] = s + value.ToString();
                            break;

                        default:
                            throw new NotImplementedException();
                    }
                    break;

                case "-=":
                    if (!Variables.ContainsKey(varName))
                        throw new Exception($"Variable {varName} didn't exist");

                    if (Variables[varName].GetType() != value.GetType())
                        throw new Exception("Values were not of same type!");

                    switch (Variables[varName])
                    {
                        case float f:
                            Variables[varName] = f - (float)value;
                            break;

                        case int i:
                            Variables[varName] = i - (int)value;
                            break;

                        default:
                            throw new NotImplementedException();
                    }
                    break;

                case "*=":
                    if (!Variables.ContainsKey(varName))
                        throw new Exception($"Variable {varName} didn't exist");

                    if (Variables[varName].GetType() != value.GetType())
                        throw new Exception("Values were not of same type!");

                    switch (Variables[varName])
                    {
                        case float f:
                            Variables[varName] = f * (float)value;
                            break;

                        case int i:
                            Variables[varName] = i * (int)value;
                            break;

                        default:
                            throw new NotImplementedException();
                    }
                    break;

                case "/=":
                    if (!Variables.ContainsKey(varName))
                        throw new Exception($"Variable {varName} didn't exist");

                    if (Variables[varName].GetType() != value.GetType())
                        throw new Exception("Values were not of same type!");

                    switch (Variables[varName])
                    {
                        case float f:
                            Variables[varName] = f / (float)value;
                            break;

                        case int i:
                            Variables[varName] = i / (int)value;
                            break;

                        default:
                            throw new NotImplementedException();
                    }
                    break;
            }

            return 0;
        }

        object Add(object left, object right)
        {
            if (left is int l && right is int r)
                return l + r;

            if (left is float lf && right is float rf)
                return lf + rf;

            if (left is int lint && right is float rfloat)
                return lint + rfloat;

            if (left is float lfloat && right is int rint)
                return lfloat + rint;

            if (left is string lstr && right is string rstr)
                return lstr + rstr;

            if (left is object[] lo && right is object[] ro)
                return lo.Concat(ro).ToArray();

            if (left is object[] lobja && right is object robj)
                return lobja.Concat(new[] { robj }).ToArray();

            throw new Exception("Invalid type operation");
        }

        object Subtract(object left, object right)
        {
            if (left is int l && right is int r)
                return l - r;

            if (left is float lf && right is float rf)
                return lf - rf;

            if (left is int lint && right is float rfloat)
                return lint - rfloat;

            if (left is float lfloat && right is int rint)
                return lfloat - rint;

            throw new Exception("Invalid type operation");
        }

        object Multiply(object left, object right)
        {
            if (left is int l && right is int r)
                return l * r;

            if (left is float lf && right is float rf)
                return lf * rf;

            if (left is int lint && right is float rfloat)
                return lint * rfloat;

            if (left is float lfloat && right is int rint)
                return lfloat * rint;

            throw new Exception("Invalid type operation");
        }

        object Divide(object left, object right)
        {
            if (left is int l && right is int r)
                return l / r;

            if (left is float lf && right is float rf)
                return lf / rf;

            if (left is int lint && right is float rfloat)
                return lint / rfloat;

            if (left is float lfloat && right is int rint)
                return lfloat / rint;

            throw new Exception("Invalid type operation");
        }

        bool IsEquals(object left, object right)
        {
            if (left.GetType() == right.GetType())
                return left.Equals(right);
            return false;
        }

        bool Greater(object left, object right)
        {
            if (left is int li && right is int ri)
                return li > ri;
            if (left is float lf && right is float rf)
                return lf > rf;
            throw new Exception($"Can't compare objects of type {left.GetType()} and {right.GetType()} with \">\"");
        }

        bool Less(object left, object right)
        {
            if (left is int li && right is int ri)
                return li < ri;
            if (left is float lf && right is float rf)
                return lf < rf;
            throw new Exception($"Can't compare objects of type {left.GetType()} and {right.GetType()} with \"<\"");
        }

        bool GreaterEquals(object left, object right)
        {
            if (left is int li && right is int ri)
                return li >= ri;
            if (left is float lf && right is float rf)
                return lf >= rf;
            throw new Exception($"Can't compare objects of type {left.GetType()} and {right.GetType()} with \">=\"");
        }

        bool LessEquals(object left, object right)
        {
            if (left is int li && right is int ri)
                return li <= ri;
            if (left is float lf && right is float rf)
                return lf <= rf;
            throw new Exception($"Can't compare objects of type {left.GetType()} and {right.GetType()} with \"<=\"");
        }
    }
}
