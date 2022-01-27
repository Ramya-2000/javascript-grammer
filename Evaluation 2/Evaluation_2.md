### 1.Prime Number between 1 to 200
**ALGORITHM** 
* Step 1:Start the program.
* Step 2:Declare counter variable and isPrime as true and creste a function primenumber.
* Step 3:Iterate the values from 2 to 200.Put condition as counter divisible by i and i not equal to counter.
* Step 4:If number is not prime print false and if it is prime means print the counter.
* Step 5:Call the function primenumber and pass 200 as arguments.
* Step 6:Stop the program.

**PSEUDOCODE**
```
BEGIN
FUNCTION PRIMENUMBER(value)
IF(typeof value === "number" && value > 2 )
FOR(let counter = 2; counter <= 200; counter++) 
    SET isPrime=true
    FOR(let i = 2; i <= counter; i++) 
        IF (counter%i===0 && i!==counter) {
            isPrime=false
        ENDFOR
    ENDFOR
    IF (isPrime === true) 
        PRINT counter
PRIMENUMBER(200)
END
```

**CODE**
```js
"use strict";
function primeNumber(value){
if(typeof value === "number" && value > 2 ){
for (let counter = 2; counter <= value; counter++) {
    let isPrime=true;
    for (let i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            isPrime=false;
        }
    }
    if (isPrime === true) {
                console.log(counter);
    }
}
}   
}           
primeNumber(200);
```  
**OUTPUT**
```js
2 
3 
5 
7 
11
13 
17
19 
23 
29 
31 
37 
41 
43 
47 
53 
59 
61 
67 
71
73 
79 
83 
89 
97 
101
103 
107
109 
113 
127 
131 
137 
139 
149 
151 
157 
163 
167 
173 
179
181 
191 
193 
197 
199 
```

### 2.From two sorted arrays, how would you find the common numbers?
**ALGORITHM**
* Step 1:Start the program.
* Step 2:Create two arrays and declare the values.
* Step 3:Iterate the two for loop upto length of two arrays.
* Step 4:Put the if condition and check arr1[i]===arr2[j].
* Step 5:Print the value in arr2[j] if both are equal.
* Step 6:Stop the program.

**PSEUDOCOE**
```
BEGIN
SET arr1 =[1,2,3,4,5,6,7,8,9,10]
SET arr2 = [2,4,5,7,11,10]
FUNCTION COMMONNUMBER(arr1, arr2) 
    SET common = []
     FOR(let i in arr1) 
      FOR(let j in arr2) 
        IF (arr1[i] === arr2[j])  
          common.push(arr2[j]); 
        ENDIF
    ENDFOR
RETURN common
COMMONNUMBER(arr1, arr2)
```
**CODE**
```js
"use strict";
const arr1 =[1,2,3,4,5,6,7,8,9,10];
const arr2 = [2,4,5,7,11,10];
function commonNumber(arr1, arr2) {
    let common = []; 
    for (let i in arr1) {
      for (let j in arr2) {
        if (arr1[i] === arr2[j]) { 
          common.push(arr2[j]); 
        }
      }
    }
   console.log(common); 
}
commonNumber(arr1, arr2);
```
**OUTPUT**
```js
Array(5) [ 2, 4, 5, 7, 10 ]
```

### 3.Explain about function Anatomy, Anonymous function and Assigning function to a variable with an example? 
**ANONYMOUS**
* Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.
* An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.
**ALGORITHM**
* Step 1:Start the program.
* Step 2:Create a function without name and as a setTimeout event callback.
* Step 3:Print the message after some milliseconds.
* Step 4:Stop the program.
**PSEUDOCODE**
```
BEGIN
SetTimeout(function () 
    PRINT "Welcome to javascript"
, 2000)
END
```
**CODE**
```js
"use strict";
setTimeout(function () {
    console.log("Welcome to javascript");
}, 2000);
```
**OUTPUT**
```js
Welcome to javascript
```

**ASSIGNING FUNCTION TO VARIABLE**
* Anonymous functions can be assigned to a variable, making them named function again.
**ALGORITHM** 
* Step 1:Start the program.
* Step 2:Assign the function with parameters a and b to the variable s.
* Step 3:Multiply a and b then return.Instead of calling function we can call that variable.
* Step 4:Stop the program.

**PSEUDOCODE**
```
BEGIN
SET s=function(a,b)
    RETURN a*b
PRINT(s(4,5));
```
**CODE**
```js
"use strict";
let s=function(a,b){
    return a*b;
  }
  console.log(s(4,5));
  ```
**OUTPUT**
```js
20
```

**ANATOMY**
* A function is a sequence of instructions within a larger program.
* It consist of the function keyword and following by name of the function.
* The function can have 0, 1 or many parameters. The order of these paramaters determine the function's signature. The number of paramaters is called arity.
* In JavaScript, a function always returns a value. The default return value of a function is undefined.

**ALGORITHM**
* Step 1:Start the program.
* Step 2:Create function with name as add with parameters num1 and num2.
* Step 3:Add the numbers and return the result.
* Step 4:Stop the program.

**PSEUDOCODE**
```
BEGIN
FUNCTION ADD(num1, num2) 
    RETURN num1 + num2;
}ADD(3,4);
END
```
**CODE**
```js
"use strict";
function add(num1, num2) {
    return num1 + num2;
}add(3,4);
```
**OUTPUT**
```js
7
```

### 4.Show an example ofSafegrounding function parameters?
**ALGORITHM**
* Step 1:Start the program.
* Step 2:Declare a function with the name java
* Step 3:Check the typeof the function using if condition.
* Step 4:Return true if the typeof the function is function otherwise return false.
* Step 5:Stop the program.

**PSEUDOCODE**
```
BEGIN
FUNCTION java(func)
    IF(typeof func == "function")
      RETURN func()
      ELSE
      RETURN Its not a function
    ENDIF
SET obj ={}
java(obj)
END
```

**CODE**
```js
function java(func){
    //call function only if it is function
    if(typeof func == "function")
      console.log(func());
      else
      console.log("Its not a function");
}
let obj ={};
java(obj);
```
OUTPUT:
```js
Its not a function
```

### 5.Explain `this` keyword with an example?
**Algorithm**
* Step 1:Start the program.
* Step 2:Create an object with properties like Title and Language.
* Step 3:Create function and call those properties with this and property name.
* Step 4:Print the result and stop the program.

**PSEUDOCODE**
```
BEGIN
SET CHANNEL=
    title: "Javascript"
    languages: ["tamil","english"]
    SUBSCRIBE()
        PRINT this
    SHOWVIDEOS()
       PRINT(this.languages)
CHANNEL.SHOWVIDEOS()
END
```
**CODE**
```js
"use strict";
const channel={
    title: "Javascript",
    languages: ["tamil","english"],
    subscribe(){
        console.log(this);
    },
    Showvideos(){
        console.log(this.languages);
    },
};
channel.Showvideos();
```
**OUTPUT**
```js
Array [ "tamil", "english" ]
​
0: "tamil"
​
1: "english"
​
length: 2
```

### 6.How ‘this’ inside the function and class?
**'this' INSIDE FUNCTION**
**ALGORITHM**
* Step 1:Start the program.
* Step 2:Create an object and with properties like firstname and lastname.
* Step 3:Create a new object and declare the firstname and lastname.
* Step 4:Print the result.
* Step 5:Stop the program.

**PSEUDOCODE**
```
BEGIN
FUNCTION CHANNEL() 
    this.firstName = "unknown"
    this.lastName = "unknown"
SET channel1 = new channel()
CHANNEL1.firstName = "javascript"
CHANNEL1.lastName = "tutorial"
    PRINT(channel1.firstName + " " + channel1.lastName)
END
```
**CODE**
```js
"use strict";
function channel() {
    this.firstName = "unknown";
    this.lastName = "unknown";
}

let channel1 = new channel();
channel1.firstName = "javascript";
channel1.lastName = "tutorial";
            
console.log(channel1.firstName + " " + channel1.lastName);
```
**OUTPUT**
```js
javascript tutorial
```

**'this' INSIDE CLASS**
**ALGORITHM**
* Step 1:Start the program.
* Step 2:Create a class with name car and properties like name and year.
* Step 3:Implement new object and print the name of car and year.
* Step 4:Print the result and end the program.

**PSEUDOCODE**
```
BEGIN
CLASS CAR
    CONSTRUCTOR(name, year) 
      this.name = name
      this.year = year
    ENDCLASS
  SET myCar = new Car("Ford", 2014)
  PRINT myCar.name + " " + myCar.year
END
```
**CODE**
```js
"use strict";
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  const myCar = new Car("Ford", 2014);
  console.log(myCar.name + " " + myCar.year);
  ```

  **OUTPUT**
  ```js
  Ford 2014
  ```

  ### 7.Difference between map, reduce and filter methods? With an example
  **MAP**
  **ALGORITHM**
  * Step 1:Start the program.
  * Step 2:Create an array and assign the value.
  * Step 3:Map the element and we can do some operation.
  * Step 4:Print the result.
  * Step 5:Stop the program.

  **PSEUDOCODE**
  ```
  BEGIN
  SET myArray = [1, 2, 3, 4]
  SET returnValue = myArray.map((element) => 
    return element * element
  PRINT returnValue
  ```
  **CODE**
```js
  "use strict";
let myArray = [1, 2, 3, 4];
  
const returnValue = myArray.map((element) => {
    return element * element;
})
console.log(returnValue);
```
**OUTPUT**
```js
Array(4) [ 1, 4, 9, 16 ]
```

**REDUCE**
**ALGORITHM**
* Step 1:Start the program.
* Step 2:Declare an array and assign the value.
* Step 3:Reduce those value using the reduce function ,and add previousValue and curentvalue.
* Step 4:Store the result in another variable.
* Step 5:Stop the program.

**PSEUDOCODE**
```
BEGIN
 SET array1 = [1, 2, 3, 4];
 SET newArray1 = array1.reduce((previousValue, currentValue) => previousValue + currentValue)
PRINT newArray1
```

**CODE**
```js
"use strict";
 const array1 = [1, 2, 3, 4];
 const newArray1 = array1.reduce((previousValue, currentValue) => previousValue + currentValue);
 console.log(newArray1);//reduce
 ```
**OUTPUT**
```js
 10
 ```

 **FILTER**
 **ALGORITHM**
 * Step 1:Start the program.
 * Step 2:Declare an array and assign the value as string.
 * Step 3:We can filter the words as per our choice using the filter method.
 * Step 4:Print the result and stop the program.

**PSEUDOCODE**
```
BEGIN
SET words = ['java', 'javascript', 'elite', 'constructor','yavar','value']
   SET result = words.filter(word => word.length <=5)
PRINT result
END
```

**CODE**
```js
"use strict";
const words = ['java', 'javascript', 'elite', 'constructor','yavar','value'];

const result = words.filter(word => word.length <=5);

console.log(result);
```

**OUTPUT**
```js
Array(4) [ "java", "elite", "yavar", "value" ]
```

### 8.Count Total number of zeros from 1 up to 50
**ALGORITHM**
* Step 1. Use Strict mode as global.
* Step 2. Create two variables globally.
* Step 3. Validate it of number and float. Create a variable with 0.
* Step 4. Use for loop to iterate the number and convert it to string.
* Step 5. Split the number by 0 then make it count to a variable.
* Step 6. Then print the value.

**PSEUDOCODE**
```
BEGIN
"use strict";
INIT start = 1;
INIT end = 50;
IF(typeof start === "number" && typeof end === "number" )THEN
        INIT count = 0;
        FOR (let i = start ; i <= end ; i++ ) DO
            INIT numberToString = i + "" ;
            SET count += numberToString.split("0").length - 1;
        ENDFOR
        PRINT(count);
    ELSE
        PRINT("The float value not accepted"); 
ENDIF
```

**CODE**
```js
"use strict";
//give input range find number of zero
const start = 1;
const end = 50;
// check if type of value is number or not 
if(typeof start === "number" && typeof end === "number" ){
        let count = 0;
        for(let i = start ; i <= end ; i++ ){
            let numberToString = i + "" ;
            //split the number by 0 and add length - 1 to count
            count += numberToString.split("0").length - 1;
        }
        console.log(count);
    }
    else{
        console.log("The string value not accepted"); 
    }
```
**OUTPUT**
```js
5
``` 

### 9.The following array of numbers show the missing number? ([1,2,3,5,6])
**ALGORITHM**
* Step 1:Start the program.
* Step 2:Create an array and assign the value.
* Step 3:Iterate the loop upto length of the array.
* Step 4:Put the condition as arr[i-1]!==i and return i.
* Step 5:Print the Missing NUmber.

**PSEUDOCODE**
```
BEGIN
SET findMissingNumber = (arr) => {
    FOR (let i = 1; i <= arr.length; i++) 
      IF (arr[i - 1] !== i) 
        RETURN  i
      ENDIF
    ENDFOR
  SET arr = [1, 2, 3,5,6];
  RETURN findMissingNumber(arr)
  END
  ```

  **CODE**
  ```js
  "use strict";
  const findMissingNumber = (arr) => {
    for (let i = 1; i <= arr.length; i++) {
      if (arr[i - 1] !== i) {
        return i;
      }
    }
  }
  const arr = [1, 2, 3,5];
  console.log(findMissingNumber(arr));
  ```
  **OUTPUT**
  ```js
  4
  ```

  ### 10.Write a program for calculating age using Date of birth? (1990)
  **ALGORITHM**
* Step 1:Start the program.
* Step 2:Get the today date,year and birthday date and year.
* Step 3:Subtract the today year from the birthyear.
* Step 4:Print the year difference and give the date of birth.
* Step 5:Print the age and stop the program.

**PSEUDOCODE**
```
BEGIN
SET getAge = (birthDateString) => 
  SET today = new Date();
  SET birthDate = new Date(birthDateString)
  SET yearsDifference = today.getFullYear() - birthDate.getFullYear()
  IF(
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate()))
    PRINT yearsDifference - 1
  PRINT yearsDifference;
PRINT(getAge('2000-03-12'))
```
**CODE**
```js
"use strict";
const getAge = (birthDateString) => {
  const today = new Date();
  const birthDate = new Date(birthDateString);

  const yearsDifference = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  ) {
    return yearsDifference - 1;
  }

  return yearsDifference;
};

console.log(getAge('2000-03-12'));
```
**OUTPUT**
```js
22
```
  
  ### 11.In the Javascript function, what are the differences between call by value and reference?
  **Call by value**
  **ALGORITHM**
  * Step 1:Start the program.
  * Step 2:Declare the variable a,b and assign the value.
  * Step 3:Change the value of a.
  * Step 4:Print the value of a and b.
  * Step 5:Stop the program.

  **PSEUDOCODE**
  ```
  BEGIN
  SET a = 5
    SET b
    b = a
    a = 3
 PRINT a
 PRINT b
 END
 ```
 **CODE**
```js
 "use strict";
 let a = 5;
    let b;
    b = a;
    a = 3;
    console.log(a);
    console.log(b);
```
**OUTPUT**
```js
3
5
```
**Call by reference**
**Algorithm**
* Step 1:Start the program.
* Step 2:Declare the variable c,d and assign the value.
* Step 3:Change the c value .
* Step 4:The changes will reflect in variable d also.
* Step 5:Stop the program.

**PSEUDOCODE**
```
BEGIN
    SET c = { greeting : 'Welcome' }
    SET d
    d = c
    c.greeting = 'Welcome to javascript'
PRINT c
PRINT d
```
**CODE**
```js
"use strict";
    let c = { greeting : 'Welcome' };
    let d;
    d = c;
  
    // Mutating the value of c
    c.greeting = 'Welcome to javascript';
    console.log(c);
    console.log(d);
```
**OUTPUT**
```js
Object { greeting: "Welcome to javascript" }
Object { greeting: "Welcome to javascript" }
```
### 12.What is Arity in Javascript? Explain with a real time example.
**ALGORITHM**
* Step 1:Start the program.
* Step 2:Declare the variable log and function Arity.
* Step 3:Create a function with name as sum and pass a,b as parameters.
* Step 4:Return the sum of a and b.
* Step 5:Call the FunctionArity and print the result.

**PSEUDOCODE**
```
BEGIN
SET log=console.log
SET functionArity= value=>value.length
FUNCTION SUM(a,b)
    RETURN a+b;
log(functionArity(SUM))
END
```
**CODE**
```js
"use strict";
const log=console.log;
const functionArity= value=>value.length;
function sum(a,b){
    return a+b;
}
log(functionArity(sum));
```
**OUTPUT**
```js
2
```

### 13.What is Currying in Javascript? Explain with a real time example.
**ALGORITHM**
* Step 1:Start the program.
* Step 2:Create the function with name multiply with parameter a ,b and c.
* Step 3:Multiply a,b and c then return.
* Step 4:Call the function into callable as f(a)(b)(c).
* Step 5:Stop the program.

**PSEUDOCODE**
```
BEGIN
FUNCTION MULTIPLY(a) { 
    RETURN (b) => {
        RETURN(c) => {
            RETURN a * b * c
            PRINT(multiply(1)(2)(3))
END
```
**CODE**
```js
"use strict";
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}console.log(multiply(1)(2)(3))
```
**OUTPUT**
```js
6
```

### 14.What is ES6?
* JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is the newer version of JavaScript that was introduced in 2015. 
* ECMAScript is the standard that JavaScript programming language uses. 
* ECMAScript provides the specification on how JavaScript programming language should work.
* ES6 introduced several key features like const, let, arrow functions, template literals, default parameters, and a lot more. 
* Before ES6 we mainly made use of the var keyword whenever we wanted to declare a variable. 
But it had some serious issues, also it was not developers’ favorite so in the ES6 version, we were introduced to const and let keywords which allows us to store variables. They both have their own way of storing variables.

### 15.What is an anonymous function? Where do we use it? Why do we need it?
**ANONYMOUS**
* An anonymous function is a function that was declared without any named identifier to refer to it. As such, an anonymous function is usually not accessible after its initial creation.
* An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.
**where do we use it?**
* --->Anonymous functions are often arguments being passed to higher-order functions or used for constructing the result of a higher-order function that needs to return a function. If the function is only used once, or a limited number of times, an anonymous function may be syntactically lighter than using a named function.
**why do we need it?**
* --->The advantage of an anonymous function is that it does not have to be stored in a separate file. This can greatly simplify programs, as often calculations are very simple and the use of anonymous functions reduces the number of code files necessary for a program.

**code**
```js
setTimeout(function () {
    console.log("Welcome to javascript");
}, 2000);
```

### 16.List the differences between named function and assigning functions to variable with examples
**named function**
* Named functions in JavaScript is just a fancy way to refer to a function that uses the function keyword and then a name you can use as a reference to that function.
* Moreover, named function provide the benefit of readability. Since you have to name it, you end up having to make it more understandable and accessible to developers of all skill levels.
* Named functions are also easier to reuse. In both ways (declaration and expression) when a function is named it makes it easier for us to consume it again for similar use cases.

**code**
```js
function add(num1, num2) {
    return num1 + num2;
}add(3,4);
```

**Assigning function to variable**
* Anonymous functions can be assigned to a variable, making them named functions
again.

**code**
```js
let s=function(a,b){
    return a*b;
  }
  console.log(s(4,5));
```
