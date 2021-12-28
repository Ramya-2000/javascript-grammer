# CHAPTER 1
## Presentation format:
- ECMAScript is a Standard for scripting languages such as JavaScript, JScript, etc. It is a       trademark scripting language specification. JavaScript is a language based on ECMAScript. A standard for scripting languages like JavaScript, JScript is ECMAScript.
–>ES5 to ES10 ->It covers imports, classes,constructor,and key principles behind functional programming.
—>import - The static import statement is used to import read only live bindings which are exported by another module. 
–>Classes - It is a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
–>The constructor method is a special method of a class for creating and initializing an object instance of that class.

Why and Where Javascript—> It allows us to add dynamic behavior to the webpage and add special effects to the webpage. 
*On websites, it is mainly used for validation purposes. 
*JavaScript helps us to execute complex actions and also enables the interaction of websites with visitors.
*The language can be used with back-end frameworks like Node. js to power the mechanics behind a web page, such as form processing and payments
*Javascript is a High level Language. It means it is easy to understand and learn.It doesn’t depend on computer hardware and it runs on a browser.


*JavaScript is not a programming language. Instead, it is a scripting language because it uses the browser to do the dirty work. 
*JavaScript runs on the client side of the web, which can be used to design / program how the web pages behave on the occurrence of an event.

VS→ It is used to develop computer programs, as well as websites, web apps, web services and mobile apps.VS Code helps you be instantly productive with syntax highlighting, bracket-matching, auto-indentation, box-selection, snippets, and more.
npm→ Npm stands for Node Package Manager. It is a package manager for the Node JavaScript platform. Npm is known as the world's largest software registry. Open-source developers all over the world use npm to publish and share their source code.

Nodejs—> Node. js for enterprise apps. It's a light, scalable and open-source language platform which makes it very easy to build apps even at the enterprise level also. Overall it increases the efficiency of the development process as it fills the gap between frontend and backend applications 

Web Console is a web-based application that enables end-users to manage their data. The console is a self-service programmed that allows us to perform operations, including download, backup, restore, and more for data management.



console.dir()
The method console.dir() displays an interactive list of the properties of the specified JavaScript object.
Syntax
console.dir(object);
console.clear()
The console.clear() method clears the console if the environment allows it.
Syntax
console.clear();
console.error()
The console.error() method outputs an error message to the Web console.
Syntax
console.error(obj1 [, obj2, ..., objN]);.
console.error(msg [, subst1, ..., substN]);
console.time()
The console.time() method starts a timer you can use to track how long an operation takes.
Syntax
console.time(label);
console.timeEnd()
The console.timeEnd() stops a timer that was previously started by calling console.time()
Syntax:
console.timeEnd(label);
copy:
Copying JSON representation of an existing object to copy buffer:
let object = { property1 : 1, property1 : 2, method : function(){} };
copy(object);
 

Chapter 3->  Javascript

Entry Point:
  -> Beginning of the code.
 ->We can start writing your code directly into <script> tags. This means it
will be executed instantly and simultaneously as the script is being downloaded
into the browser, without concern for DOM or other media.

AddEventListener—> InBuilt function in Javascript.
Event will access—> After completion of DOM document.
    
event : event can be any valid JavaScript event.Events are used without “on” prefix like use “click” instead of “onclick” or “mousedown” instead of “onmousedown”.
listener(handler function) : It can be a JavaScript function which respond to the event occur.

DOMContentLoaded
  The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

The Document Object Model (DOM) is an application programming interface (API) for HTML documents. It defines the logical(tree)  structure of documents and the way a document is accessed and manipulated.


 Document.readyState—> property describes the loading state of the document.
Values—>The readyState of a document can be one of following:
loading—->The document is still loading.
interactive—>The document has finished loading and the document has been parsed but sub-resources such as scripts, images, stylesheets and frames are still loading.
complete—>The document and all sub-resources have finished loading. The state indicates that the load event is about to fire.       

Window.onload—> This method can wait until all images and similar media have been fully downloaded.                                                     

Dynamic import() –> introduces a new function-like form of import that unlocks new capabilities compared to static import. We can import JavaScript modules dynamically and work with them. 
                

The strict mode->   is a feature available since ECMAScript 5 that allows you to place your entire program, or an isolated scope, in a ”strict” operating context. This
strict context prevents certain actions from being taken and throws an exception.
—> Cannot use undeclared variables
—> Cannot delete variable 
           —> Cannot declare globally
           —>In a professional environment, it is common to have strict mode on, because it
can potentially prevent many bugs from happening and generally supports better
software practice.
  "use strict";
   var x=5;
   delete x;

Literals—> It can also have numbers and strings.
—>You can combine literals using operators (+,-,/,*, etc.) to produce a single result.

Value                             typeof                            Constructor
1                                    number                          Number()
3.14                               number                          Number()
Some text                      string                              String()
[]                                    object                             Array()
{}                                    object                            Object()
True                               boolean                         Boolean()
F f() {}                            function                          Function()
—>The typeof(value) function can be used to determine the type of the literal value. 
```javascript
console.log(1+1);
//using number function
console.log(Number(1)+Number(2));
//using number object constructor
console.log(1+ Number(2)+new Number(4));
//literal values
```


Variables-->> are used to store data values. JavaScript uses the keywords var , let and const to declare variables. An equal sign is used to assign values to variables.In JavaScript, there are three different variable types: var , let , and const . Each of these variables have several rules around how they should be used, and have different characteristics.
—>Variable declaration is definition + assignment.
—> var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.


Dynamic Typing
JavaScript is a dynamically-typed language. It means that variables created using
var or let keywords can be dynamically re-assigned to a value of another type at
some point later in your JavaScript program.
In statically-typed languages doing that would generate an error

—>import (and export) keyword to import variables, functions and classes from an external file. To make a variable, object or a function available for export, the export keyword must be prepended to its definition. Not everything in a module will be exported
 Importing External file:
<!DOCTYPE html>
  <html>
      <head>
          <title>Import Module</title>
          <script src="your-External-Script-path"></script>
      </head>
  </html>

Passing value by reference
But JavaScript assigns values by reference without actually making a copy of the
original value. 
let a ={p:5};
let b=a;
let c=b;
let d=c;
let f=d;
a.p=10;
console.log(f.p);

CHAPTER-4 
Statement—> smallest building block of a computer program.
—>Statements are used in JavaScript to control its program flow.
–>Definitions made with var, let or const keywords return undefined because they
behave only as value assignments which means [ let a=1 // undefined]   

new Number(89);
Number { 89 };
undefined
let n= new Number(45);
undefined

   
Expression—>Any unit of code that can be evaluated to a value is an expression.
—> don’t have to be variable definitions. You can create them
by simply using some literal values in combination with operators.
—>   let f=function()  {return 1}
         f();
Function f() evaluates to value 1, because it returns 1. This is why f() is often
referred to as a function expression.
       f(); //1
       var y=10; //undefined
       Let f=function(){  
