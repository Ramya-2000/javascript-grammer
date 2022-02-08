### 1. What is the scope of ‘this’ inside the Arrow function? Explain with an example?

**ALGORITHM**
* Step 1:Apply strict mode and create the array of objects.
* Step 2:Create arrow function as subscribe and print the properties.
* Step 3:Create normal function as showvideos and print the properties.
* Step 4: Call the function and print the result.

**PSEUDOCODE**
```
BEGIN
  INIT channel
    title: "Javascript",
    languages: ["tamil","english"],
    subscribe : () => {
        RETURN(this.title)
    Showvideos(){ 
        INIT sub = () =>
           RETURN this.title
        sub()
        RETURN (this)
channel.subscribe() 
channel.Showvideos()
END
```

**CODE**
```js
  "use strict";
  const channel={
    title: "Javascript",
    languages: ["tamil","english"],
    subscribe : () => {
        console.log(this.title); //arrow function doesnot bind 'this'
    },
    Showvideos(){
        let sub = () => {
            console.log(this.title);
        }
        sub();
        console.log(this); //normal function bind 'this'
    },
};
channel.subscribe(); 
channel.Showvideos();

```
**OUTPUT**
```js
undefined
Javascript
{ title: 'Javascript',
  languages: [ 'tamil', 'english' ],
  subscribe: [Function: subscribe],
  Showvideos: [Function: Showvideos] }
```

### 2.How would you create all permutations of a string?
**ALGORITHM**
* Step 1:Create the function findPermutations and pass string as parameter.
* Step 2:Check whether the entered string is string and if the string length is less than 2 print the string.
* Step 3:Duplicates will be removed by indexOf method.
* Step 4:Declare a for loop and run till the length of the string.
* Step 5:Call the function and print the result in array.

**PSEUDOCODE**
```
"use strict"
INIT string="abmn";
FUNCTION permutation( string, result)
    IF(string.length === 0)THEN
        count++;
        PRINT(result);
    ELSE
        FOR(let i = 0; i < string.length ; i++ )DO
            let remain = string.substring( 0, i) + string.substring( i + 1 );
            permutation( remain, result + string[i]);
        ENDFOR
    ENDIF
FUNCTIONEND
IF(typeof string === "string")THEN
    IF(string.length > 0)THEN
        var count = 0;
        permutation( string, "");
        PRINT("Total number of permutation are :",count);
    ELSE
        PRINT("This is empty string");
    ENDIF

ELSE
        PRINT("This is not string")
ENDIF
```

**CODE**
```js
"use strict";
let string="abmn";
function permutation( string, result){
    if(string.length === 0){
        count++;
        console.log(result);
    }else{
        for(let i = 0; i < string.length ; i++ ){
            let remain = string.substring( 0, i) + string.substring( i + 1 );
            permutation( remain, result + string[i]);
        }
    }
}
if(typeof string === "string"){
    if(string.length > 0){
        var count = 0;
        permutation( string, "");
        console.log("Total number of permutation are :",count);
    }else{
        console.log("This is empty string");
    }

}else{
    console.log("This is not string")
}
```

**OUTPUT**
```js
abmn 
abnm 
ambn 
amnb 
anbm 
anmb 
bamn 
banm 
bman 
bmna 
bnam 
bnma 
mabn 
manb 
mban 
mbna 
mnab 
mnba 
nabm 
namb 
nbam 
nbma
nmab 
nmba 
Total number of permutation are : 24
​
```
### 3.What is the difference between when classic and arrow functions are used as event callbacks?

**Algorithm**
* Step 1. Create a html file. 
* Step 2. Inside the script tag write a function with name of clicked.
* Step 3. Print something inside the function. 
* Step 4. Add event of click then function is executed.

**PSEUDOCODE**
```
BEGIN
<html>
<body>

<h2>Event callback</h2>

<p id="demo"></p>

<button id="myBtn" class = 'draggable'>Click to change text color</button>

<p id="demo2">Hello world !</p>

<script>

var dragElem = document.querySelector('.draggable');

var listener = {
  greeting: 'Welcome',
  color : 'blue',
  color2 : 'red',
  handleEvent: function( event ) {
  console.log( this.greeting + event.type );
  document.getElementById("demo2").style.color = this.color;
  },
  handleEvent: ( event ) => {
    console.log( this.greeting + event.type );
    document.getElementById("demo2").style.color = this.color2;
dragElem.addEventListener( 'click', listener );

</script>

</body>
</html>
END
```
**CODE**
```js
<!DOCTYPE html>
<html>
<body>

<h2>Event callback</h2>

<p id="demo"></p>

<button id="myBtn" class = 'draggable'>Click to change text color</button>

<p id="demo2">Hello world !</p>

<script>

var dragElem = document.querySelector('.draggable');

var listener = {
  greeting: 'Welcome',
  color : 'blue',
  color2 : 'red',
  handleEvent: function( event ) {     //classic function
  console.log( this.greeting + event.type );
  document.getElementById("demo2").style.color = this.color;
  },
  handleEvent: ( event ) => {         //arrow function
    console.log( this.greeting + event.type );
    document.getElementById("demo2").style.color = this.color2;
  },
  
};

dragElem.addEventListener( 'click', listener );


</script>

</body>
</html>
```

**output**
```js
welcomeclick
```

### 4.Look at the code below, you have a for loop if you have setTimeout inside it. If log the
loop counter inside setTimeout, what will be logged?
```js
for(var i = 0; i < 10; i++) {
setTimeout(function() {
console.log(i);
}, 10);
}
```
**ALGORITHM**
* Step 1:Create a for loop and iterate upto 10.
* Step 2:Create function and pass i as parameter.
* Step 3:Call setTimeout function and apply delay time
* Step 4:Call the function and print the result.

**PSEUDOCOE**
```
BEGIN
FOR(var i = 0; i <10; i++) 
    function a(i)
 setTimeout(function() 
    RETURN (i)
    },  500 * (i+1))
    ENDFOR
a(i)

```

**CODE**
```js
for (var i = 0; i <10; i++) {
    function a(i){
 setTimeout(function() { 
    console.log(i);
    },  500 * (i+1));
}a(i);
}
```
**OUTPUT**
```js
0
1
2
3
4
5
6
7
8
9
```
### 5.Explain the Class instance method and static method with an example?
**CLASS INSTANCE**
**ALGORITHM**
* Step 1:Create a class with name as Car.
* Step 2:Create a constructor class and declare properties like name and year.
* Step 3:Write the instance of class and pass the values.
* Step 4:Print the result.

**PSEUDOCODE**
```
BEGIN
CLASS Car 
    constructor(name, year) 
      this.name = name
      this.year = year
ENDCLASS
  INIT myCar = new Car("Ford", 2014)
  RETURN (myCar.name + " " + myCar.year)
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
**STATIC METHOD**
**ALGORITHM**
* Step 1:Create class name as Mycar.
* Step 2:Static method is created with name as model.
* Step 3:Call the function with class name  directly without creating an instance.

**PSEUDOCODE**
```
BEGIN
CLASS Mycar
    static model()
  RETURN "no new model"
ENDCLASS
RETURN (Mycar.model())
END
```

**CODE**
```js
"use strict";
class Mycar{
    static model(){
  return "no new model"
}
}
console.log(Mycar.model());

// static method with same name
"use strict";
class Mycar{
    static model(){
      return "no new model"
    }
    static model(){
        return "ford"
    }
    }
    console.log(Mycar.model());


//invoke static inside regular function
"use strict";
class Mycar{
    static model(){
        return "duster in 2020";
    }
    new1(){
        console.log(Mycar.model());
    }
}
let mycar=new Mycar();
mycar.new1();

```
**OUTPUT**
```js
no new model
ford
duster in 2020   
```

### 6.How does “this” works inside the Class method with an example?

**ALGORITHM**
* Step 1:Create a class with name as car.
* Step 2:Constructor is created and pass name and year as parameter.
* Step 3:Instance of class is created and pass the values.
* Step 4:Print the result.

**PSEUDOCODE**
```
BEGIN 
CLASS Car 
    constructor(name,year) 
      this.name = name
      this.year = year
  ENDCLASS
  INIT myCar = new Car("Ford", 2014)
  RETURN (myCar.name + " " + myCar.year)
END
```

**CODE**
```js
"use strict";
class Car {
    constructor(name,year) {
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
### 7. What is the execution order of the following block of code?

```js
const ex1 = () => console.log(ex1)
const ex2 = () => console.log(ex2)
const ex = () => {
console.log(ex)
setTimeout(ex1, 1000)
ex2()
}
ex()
```
**OUTPUT**
```js
[Function: ex]
[Function: ex2]
[Function: ex1]
```

### 8. Explain the event loop with an example?
**ALGORITHM**
* Step 1:Create the function called LevelTwo and return message as Inside Level Two.
* Step 2:Create another function as LevelOne and return LevelTwo function inside it.
* Step 3:Another function as main and return LevelOne.
* Step 4:Call the main function.

**PSEUDOCODE**
```
BEGIN
FUNCTION LevelTwo() 
    RETURN "Inside Level Two!"
    ENDFUNCTION
  FUNCTION LevelOne() 
    LevelTwo()
    ENDFUNCTION
     FUNCTION main() 
       LevelOne()
       ENDFUNCTION
    main()
END
```
**CODE**
```js
"use strict";
function LevelTwo() {
    console.log("Inside Level Two!")
    }
    function LevelOne() {
    LevelTwo()
    }
    function main() {
    LevelOne()
    }
    main()
```
**OUTPUT**
```js
Inside Level Two!
```
### 9.Create a custom event listener and explain?
**ALGORITHM**
* Step 1. Create a html file. 
* Step 2. Inside the script tag write a function with name of clicked.
* Step 3. Print something inside the function. 
* Step 4. Add event of click then function is executed.


**PSEUDOCODE**
```
BEGIN
<html>
    <head>
        <title>Arrow event call back</title>
        <script>
            FUNCTION clicked(){
                PRINT("You Clicked!!!");
                PRINT(this)
            }
            document.addEventListener("click",clicked);
        </script>
    </head>
    <body>
        <h1 style="color: firebrick; text-align-last: center; text-decoration-line: underline;">CLICK</h1>
    </body>
</html>

END
```
**CODE**
```js
<html>
    <head>
        <title>Arrow event call back</title>
        <script>
            function clicked(){
                console.log("You Clicked!!!");
                console.log(this)
            }
            document.addEventListener("click",clicked);
        </script>
    </head>
    <body>
        <h1 style="color: firebrick; text-align-last: center; text-decoration-line: underline;">CLICK</h1>
    </body>
</html>
```
**OUTPUT**
```js
You Clicked

```

### 10.Explain the ‘super’ and ‘constructor’ keywords inside the Class with an example?
**SUPER**
**ALGORITHM**
* Step 1:Create a class with name as Person.
* Step 2:Constructor method is created and pass name and grade as parameter.
* Step 3:Extend the child class with parent class .
* Step 4:Use the super keyword to access the properties of parent class.
* Step 5:Create instance of class and call the function.


**PSEUDOCODE**
```
BEGIN
CLASS Person                   
    constructor(name, grade) 
       this.name = name
       this.grade = grade
    goal() 
       RETURN `${this.name} want to become scientist`
    interest() 
       return `${this.name} interested in hockey`
ENDCLASS
CLASS Student extends Person 
  constructor(name, grade) 
    super(name, grade)
    need() 
       return `${this.name} needs a basket ball`
    career()                   
       RETURN `${super.goal()}`
       ${super.interest()}`
       ${this.need()}`
ENDCLASS
INIT student = new Student("Anu")
RETURN (student.career())
END
```

**CODE**
```js
"use strict";
class Person {                  //parent class
    constructor(name, grade) {
       this.name = name;
       this.grade = grade;
    }
    goal() {
       return `${this.name} want to become scientist`;
    }
    interest() {
       return `${this.name} interested in hockey`;
    }
 }
class Student extends Person {   //child class
  constructor(name, grade) {
    super(name, grade);
    }
    need() {
       return `${this.name} needs a basket ball`;
    }
    career() {          //accessing parent properties in child class using super method        
return`${super.goal()}  
       ${super.interest()} 
       ${this.need()}`;
    }
 }
const student = new Student("Anu");   //instance of child class 
console.log(student.career());
```

**OUTPUT**
```js
Anu want to become scientist     
Anu interested in hockey 
Anu needs a basket ball
```

**CONSTRUCTOR**
**ALGORITHM**
* Step 1:Create a class with name as Person.
* Step 2:Constructor class is created and pass name ad age as paramaters.
* Step 3:Write method as introduce and return name and age.
* Step 4:Create instance of class and pass the values.

**PSEUDOCODE**
```
BEGIN
CLASS Person 
    constructor(name,age)     
      this.name = name
      this.age=age
  introduce() 
  RETURN `Hello, my name is ${this.name}`+" "+ `and my age is ${this.age}`
  ENDCLASS
  INIT person = new Person('Nirmal','20') 
  RETURN (person.introduce())
  END
  ```
 **CODE**
 ```js
 "use strict";
class Person {
    constructor(name,age) {    //constructor method
      this.name = name;
      this.age=age;
    }
  introduce() {       //return name and age 
  return `Hello, my name is ${this.name}`+" "+ `and my age is ${this.age}`;
    }
  }
  const person = new Person('Nirmal','20');    //instance of class
  console.log(person.introduce());
  ```

  **OUTPUT**
  ```js
  Hello, my name is Nirmal and my age is 20
  ```