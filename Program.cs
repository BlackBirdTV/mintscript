using Antlr4.Runtime;
using System;
using System.Collections.Generic;
using System.IO;

namespace MintScript
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Title = "MintScript";

            if (args.Length > 0)
            {
                if (args[0] == "init")
                    Init();
                else if (File.Exists(args[0]))
                    Run(File.ReadAllText(args[0]));
            }
            else
                Console.WriteLine("Command requires arguments, use \"init\" to initialize a project or module or type in a path to a *.mis file to run it.");
        }

        static void Init()
        {
            var path = Ask("What is your project called? (Only lowercase letters and - are allowed)");
            var buffer = "";
            bool containedIllegalchars = false;
            foreach (char c in path)
                if ("abcdefghijklmnopqrstuvwxyz-".Contains(c))
                    buffer += c;
                else
                    containedIllegalchars = true;
            if (containedIllegalchars)
            {
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.WriteLine($"Your project name contained illegal characters, so it was created under the name \"{path}\"");
                Console.ResetColor();
            }
            path = buffer;
            Directory.CreateDirectory(path);
            Directory.SetCurrentDirectory(path);
            switch (Ask("What do you want to create?", new string[] { "Project", "Module" }))
            {
                case 0:
                    // Project
                    Directory.CreateDirectory("modules");
                    File.Create("main.mis");
                    Console.WriteLine("Your project boilerplate has been set up.\n Happy developing!");
                    return;

                case 1:
                    // Module
                    File.Create("module.json");
                    File.WriteAllText("module.json", "{\n\"export_functions\": [ \n{\t\"method\": \"\",\n\t\"args\": []\n} ]\n}");
                    File.Create(path + ".mis");
                    Console.WriteLine("Your module boilerplate has been set up.\n To use the module, just pull this folder into the modules folder of a project.");
                    return;
            }
        }

        static string Ask(string question)
        {
            Console.Write(question + ": ");
            return Console.ReadLine();
        }

        static int Ask(string question, string[] options)
        {
            if (options.Length > 1)
            {
                Console.Write(question + " ");
                int i = 0;
                foreach (string option in options)
                {
                    if (i == 0)
                        Console.ForegroundColor = ConsoleColor.Green;
                    Console.Write(option);
                    if (i == 0)
                        Console.ForegroundColor = ConsoleColor.White;
                    if(i < options.Length - 1)
                        Console.Write(" | ");
                    i++;
                }
                Console.Write("\r");
                i = 0;
                int sollIndex = 0;
                while (true)
                {
                    var key = Console.ReadKey();
                    if(key.Key == ConsoleKey.Enter)
                        break;
                    if (key.Key == ConsoleKey.LeftArrow)
                        sollIndex--;
                    if (key.Key == ConsoleKey.RightArrow)
                        sollIndex++;
                    Console.Write("\r" + question + " ");
                    if (sollIndex > options.Length - 1)
                        sollIndex = 0;
                    else if (sollIndex < 0)
                        sollIndex = options.Length - 1;
                    foreach (string option in options)
                    {
                        if (i == sollIndex)
                            Console.ForegroundColor = ConsoleColor.Green;
                        Console.Write(option);
                        if (i == sollIndex)
                            Console.ForegroundColor = ConsoleColor.White;
                        if(i < options.Length - 1)
                            Console.Write(" | ");
                        i++;
                    }
                    i = 0;
                }
                Console.WriteLine();
                return sollIndex;
            }
            else
                return -1;
        }

        static void Run(string code)
        {
            string status = "";
            try
            {
                status = "taking in the code";
                AntlrInputStream inputStream = new AntlrInputStream(code);
                status = "running the lexer";
                MintScriptLexer msLexer = new MintScriptLexer(inputStream);
                CommonTokenStream commonTokenStream = new CommonTokenStream(msLexer);
                status = "parsing";
                MintScriptParser msParser = new MintScriptParser(commonTokenStream);
                MintScriptParser.ProgramContext msContext = msParser.program();
                MSVisitor visitor = new MSVisitor();
                status = "executing";
                visitor.Visit(msContext);
            }
            catch (Exception e)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine($"An Exception occurred while {status}: {e.Message}");
                Console.ForegroundColor = ConsoleColor.White;
                Console.ReadKey();
            }
        }

        // the custom error listener class
        public class ErrorListener : BaseErrorListener, IAntlrErrorListener<int>
        {
            public List<string> ErrorList { get; private set; }

            // pass in the helper class error list to this constructor
            public ErrorListener(List<string> errorList)
            {
                ErrorList = errorList;
            }

            public void SyntaxError(IRecognizer recognizer, int offendingSymbol,
              int line, int offset, string msg, RecognitionException e)
            {
                var errmsg = "Line " + line + ", 0-offset " + offset + ": " + msg;

                ErrorList.Add(errmsg);
            }
        }
    }
}
