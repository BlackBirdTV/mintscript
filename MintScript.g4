grammar MintScript;

program: line* EOF;

line: returnStatement | statement | ifBlock | whileBlock | functionBlock;

returnStatement: 'return' expression;

statement: (assignment | functionCall | importStatement) (';' | '\n');

ifBlock: 'if' '(' expression ')' block ('else' elseIfBlock)?;

elseIfBlock: block | ifBlock;

whileBlock: 'while' '(' expression ')' block;

functionBlock: 'func ' IDENTIFIER '(' (IDENTIFIER IDENTIFIER (',' IDENTIFIER IDENTIFIER)*)? ')' block;

importStatement: 'import' IDENTIFIER ('from' expression)?;

assignment
	: IDENTIFIER assignOp expression	#expressionAssignment
	| IDENTIFIER quickAssignOp			#quickAssignment
	;

functionCall: IDENTIFIER '(' (expression (',' expression)*)? ')';

expression
	: constant								#constantExpression
	| index_identifier						#indexIdentifierExpression
	| IDENTIFIER							#identifierExpression
	| functionCall							#functionExpression
	| '(' expression ')'					#parenthesizedExpression
	| '!' expression						#notExpression
	| expression '**' expression			#powerExpression
	| expression multOp expression			#multipierExpression
	| expression addOp expression			#additiveExpression
	| expression compareOp expression		#comparisionExpression
	| expression boolOp expression			#booleanOperation
	;

multOp: '*' | '/';
addOp: '+' | '-';
compareOp: '==' | '!=' | '>' | '<' | '>=' | '<=';
boolOp: BOOL_OPERATOR;

assignOp: '=' | '+=' | '-=' | '*=' | '/=';
quickAssignOp: '++' | '--';

BOOL_OPERATOR: '&&' | '||';

constant
	: FLOAT 
	| INTEGER
	| STRING 
	| BOOL
	| array
	;

array: '{' constant (',' constant)* '}';

FLOAT: [0-9]+ '.' [0-9]+;
INTEGER: [0-9]+;
STRING: ('"' ~'"'* '"') | ('\'' ~ '\''* '\'');
BOOL: 'true' | 'false';
NULL: 'null';

block: '{' line* '}' | line;

Comment
  :  '//' ~( '\r' | '\n' )*
  ;

WS: [ \t\r\n]+ -> skip;

INDEX: '[' [0-9] ']';

IDENTIFIER: [a-zA-Z_.][a-zA-Z0-9_.]*;

index_identifier: IDENTIFIER INDEX*;

ANY: .;