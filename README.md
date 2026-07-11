# Overview

This is a simple compiler developed using C, C++, LEX, and YACC. It demonstrates the fundamental phases of compiler design, including lexical analysis, syntax analysis, parsing, and intermediate code generation.

This project was developed to understand how programming languages are translated into machine-understandable instructions.

## ✨ Features

- ✅ Lexical Analysis using LEX
- ✅ Syntax Analysis using YACC
- ✅ Token Generation
- ✅ Grammar Validation
- ✅ Parse Tree Generation
- ✅ Intermediate Code Generation
- ✅ Error Detection for Invalid Syntax
- ✅ Supports Basic C/C++ Syntax

## 🛠️ Technologies Used

- 💻 C
- 💻 C++
- ⚙️ LEX (Flex)
- ⚙️ YACC (Bison)
- 🖥️ Shell Script
- 🌐 HTML
- 🎨 CSS
- 📜 JavaScript

## Compiler Workflow

Source Code
     │
     ▼
Lexical Analyzer (LEX)
     │
     ▼
Parser (YACC)
     │
     ▼
Syntax Validation
     │
     ▼
Intermediate Code Generation

## Project Structure

Compiler/
│
├── lexer.l
├── parser.y
├── main.cpp
├── input.c
├── output.txt
├── Makefile
└── README.md
Installation

Clone the repository

git clone https://github.com/yourusername/Harshit_Compiler.git

Move into the project

cd Harshit_Compiler

Compile

flex lexer.l
bison -d parser.y
gcc lex.yy.c parser.tab.c -o compiler

Run

./compiler
