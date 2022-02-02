### 1. What is the scope of ‘this’ inside the Arrow function? Explain with an example?

**ALGORITHM**
* Step 1:Apply strict mode and create the array of objects.
* Step 2:Create arrow function as subscribe and print the properties.
* Step 3:Create normal function as showvideos and print the properties.
* Step 4: Call the function and print the result.

**PSEUDOCODE**
```
BEGIN
  "use strict";
  const channel={
    title: "Javascript",
    languages: ["tamil","english"],
    subscribe : () => {
        console.log(this.title); //arrow function doesnot bind 'this'
    },
    Showvideos(){
        console.log(this); //normal function bind 'this'
    },
};
channel.subscribe(); 
channel.Showvideos();
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
        console.log(this); //normal function bind 'this'
    },
};
channel.subscribe(); 
channel.Showvideos();
```
**OUTPUT**
```js
undefined
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
BEGIN
let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    // This array will hold our permutations
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      // if char was used already, skip this time to remove duplicates
      if (string.indexOf(char) != i)
      continue
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
      for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
  } 
  findPermutations('aabm');
```

**CODE**
```js
let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    } else if (string.length < 2 ){
      return string
    }
  
    // This array will hold our permutations
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      // if char was used already, skip this time to remove duplicates
      if (string.indexOf(char) != i)
      continue
      let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)
      for (let permutation of findPermutations(remainingChars)){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
  } 
  findPermutations('aabm');
  ```

**OUTPUT**
```js
  Array(12) [ "aabm", "aamb", "abam", "abma", "amab", "amba", "baam", "bama", "bmaa", "maab","maba","mbaa" ]
​```

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
for (var i = 0; i <10; i++) {
    function a(i){
 setTimeout(function() { 
    console.log(i);
    },  500 * i);
}a(i);
}
```

**CODE**
```js
for (var i = 0; i <10; i++) {
    function a(i){
 setTimeout(function() { 
    console.log(i);
    },  500 * i);
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
"use strict";
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  const myCar = new Car("Ford", 2014);
  console.log(myCar.name + " " + myCar.year);
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
class Mycar{
    static model(){
  return "no new model"
}
}
console.log(Mycar.model());
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
```
**OUTPUT**
```js
no new model
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
class Car {
    constructor(name,year) {
      this.name = name;
      this.year = year;
    }
  }
  const myCar = new Car("Ford", 2014);
  console.log(myCar.name + " " + myCar.year);
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
* Step 1:

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