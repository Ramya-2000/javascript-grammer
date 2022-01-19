### 1.PRIME NUMBER

**ALGORITHM:**
* Step 1.Start the program.
* step 2 Write a function with parameter and assign a variable.
* Step 3. Check the number is n<2 means return “not a prime”.
* Step 4. if the condition fails for loop will be executed 
* Step 5. Check the condition n%i===0.If true means it return not a prime number.
* Step 6. If condition fails it will return as prime number.
* Step 7. Stop the program.

**PSEUDOCODE:**
```
BEGIN
   FUNCTION isPrime(n)
     IF (n<2)
     RETURN number is not a prime
    FOR (let i=2;i<n;i++)
         IF (n%i===0)
         RETURN number is not a prime number
         ENDIF
    ENDFOR
         RETURN number is  prime number
   ENDFUNCTION
END
```

***CODE:***
```js
function isPrime(n){
    if (n<2)
      return `${n} is not a prime`
    for(let i=2;i<n;i++){
        if(n%i ===0){
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`
}
console.log(isPrime(29));
```
**OUTPUT:**
29 is a prime number



### 2.DIFFERENCE BETWEEN == AND ===

 == is used for comparison between two variables irrespective of the datatype of variable. === is used for comparison between two variables but this will check strict type, which means it will check datatype and compare two values.

**ALGORITHM:**
* Step 1. Start the program.
* Step 2. Declare  a variables and assign a value.
* Step 3. Then compare the values using == operator and also datatype using ===.
* Step 4. Check the result and  print either true or false.
* Step 5. stop

**PSEUDOCODE:**
```
BEGIN
INIT one,one_again,one_str
 COMPARE one==one_again
   PRINT true
 COMPARE one===one_again
   PRINT true
 COMPARE one==one_str
   PRINT true
 COMPARE one===one_str
  PRINT false
END
```

***CODE:***
```js
var one = 1;
var one_again = 1;
var one_str= "1";  

console.log(one ==  one_again);  // true
console.log(one === one_again);  // true
console.log(one ==  one_str); // true
console.log(one === one_str); // false
```

**OUTPUT:**
true 
true 
true
false
    

### 3.REVERSE A STRING 

**ALGORITHM**
* STEP 1: Get an input from the user or take an example input.
* STEP 2: Split the given input into a single letter using split(‘’) function
* STEP 3:  Reverse the splitted word.
* STEP 4:  Join the reversed word using join(‘’) function.
* STEP 5: Stop the program.   

**PSEUDOCODE**
```
BEGIN
   SET str=”example string”
    SET ar=str.split(“ “)
     SET ar.reverse().join(‘ ‘)   
 RETURN ar
PRINT result
END
```

***CODE:***
```js
var str = "constructor";
var ar=str.split('')
console.log(ar.reverse().join(''));
```

**OUTPUT:**
rotcurtsnoc

### 4.REVERSE WORDS IN A SENTENCE

**ALGORITHM:**
* step 1. Start the program.
* step 2. create a function with parameter of reverse.
* Step 2. Use the reverse() method to reverse the new created array
* Step 3. Use the join(" ") method to join all elements of the array into a string
* Step 4. Return the reversed string
* Step 5. Call the string function with string parameters
* Step 6. Stop.

**PSEUDOCODE:**
```
BEGIN
  FUNCTION reverse(str)
    SET str.split(" ")
    SET reverse=arr.map(i=>{  return i.split(‘’).reverse().join(“); })
   RETURN join(“ “);
  END FUNCTION
  PRINT result
```

***CODE:***
```js
var str = "Yavar Tech Works";
function rev(str){
    var arr = str.split(" ");
    var reverse = arr.map(i=>{
        return i.split('').reverse().join("");
        });
    return reverse.join(" ");
}
console.log(rev(str));
```

**OUTPUT:**
ravaY hceT skroW

### 5.PALINDROME OR NOT 

**ALGORITHM:**
* Step 1. Start the program
* Step 2. Get the input as string from the user. And store it in another variable.
* Step 3. First split that input string then process the reverse function and join.
* Step 4. Compare the both input string and result string.
* Step 5. If both are equal print as Palindrome ,if not print as Not a palindrome
* Step 6. Stop 

**PSEUDOCODE:**
```
BEGIN
INIT str=”Technologies”
SET arr=str.split(‘ ‘)
    IF (arr.reverse().join(‘ ‘) ===str)
       PRINT palindrome
    ELSE 
      PRINT not a palindrome
END
```

***CODE:***
```js
var str = "Technologies";
var arr=str.split('')
if(arr.reverse().join('') === str){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}
```

**OUTPUT:**
Not a Palindrome


### 6.PROGRAM TO EXPLAIN THE  DIFFERENCE  BETWEEN forEach and map?
**ALGORITHM:**
* Step 1. start the program
* Step 2. Create an array and get the input.
* Step 3. Use the map method with the array and write the event.
* Step 4. Use the forEach to iterate the values.
* Step 5. Print the values
* Step 6. stop

**PSEUDOCODE:**
```
BEGIN
INIT array elements
PRINT map(element => element * element)
PRINT forEach(element => element * element)
END
```

***CODE:***
```js
let myArray = [1, 2, 3, 4];  
const returnValue = myArray.map((element) => {
    return element * element;
})
console.log(returnValue);
```

**OUTPUT:**
Array(4) [ 1, 4, 9, 16 ]


### 7.GENERATE A RANDOM NUMBER BETWEEN 1 TO 5
**ALGORITHM:**
* Step 1. Start the program.
* Step 2. Use Math.floor to returns the largest integer less than or equal to a given number
* Step 3. Math.random to get the random value till given number.
* Step 5. Add the number 1 to avoid the 0 values.
* Step 6. Then print the number.
* Step 7. Stop.

**PSEUDOCODE:**
```
BEGIN
INIT random
PRINT (Math.floor((Math.random() * 5) + 1));
```

***CODE:***
```js
var random=Math.floor(Math.random() * 5) + 1;
console.log(random);
```

**OUTPUT:**
3

### 8.REMOVE DUPLICATE FROM THE GIVEN ARRAY [1,2,9,4,5,8,3,5,1,4,5]
**ALGORITHM:**
* Step 1. Start the program
* Step 2. Create a array with number values.
* Step 3. use SET method
* Step 4. Array is initialized with SET method
* Step 5. Print the values where the duplicates will be removed.
* Step 6. stop the program.

***PSEUDOCODE:***
```
BEGIN
INIT numbers
INIT uniqueArr
SET numbers
PRINT uniqueArr
END
```

***CODE:***
```js
let Arr =([1,2,9,4,5,8,3,5,1,4,5])
let uniqueArr= [...new Set(Arr)];
console.log(uniqueArr);
```

**OUTPUT:**
Array(7) [ 1, 2, 9, 4, 5, 8, 3 ]

### 9.Write a program to calculate the sum of the first 10 natural numbers.
**ALGORITHM:**
* Step 1. start the program.
* Step 2. Declare two varibale num= 0 , i = 1.
* Step 3. Use for loop to iterate the values.
* Step 4. Add the iterated values inside the for.
* Step 5. Print the value and call the function.
* Step 6. Stop.

**PSEUDOCODE:**
```
BEGIN
FUNCTION sumOfN(n)
NUM=0;
i and num as integer
for i upto n increment i by 1 and i=1 
{ num=num+i; } 
PRINT num; 
END FUNCTION
END
```

***CODE:***
```js
function sumOfN(n){
    var num =0;
    for(let i = 1; i<=n ;i++){
        num = num+i;
    }
    return num
}
console.log(sumOfN(10));
```

**OUTPUT:**
55

### 10.Write a program to print the sum of the even and odd numbers for a given number?(100)
**ALGORITHM:**
* Step 1. start the program
* Step 2. Declare three variables n,oddSum and evenSum.
* Step 3. Iterate for loop till 100 times.
* Step 4. if(i % 2 == 0) then print even numbers
* Step 5. else print odd numbers.
* Step 6. Stop.

**PSEUDOCODE:**
```
INIT i=1, n = 6;
INIT oddSum = 0;
INIT evenSum = 0;
WHILE(i<=n)
 IF(i%2==0) 
  evenSum+=i;
 ELSE
  oddSum+=i;
PRINT RESULT
```

***CODE:***
```js
ar n = 6;
var oddSum = 0;
var evenSum = 0;
var i = 1; // initialization
while(i <= n){ // condition
  if(i % 2 == 0){
    evenSum += i;
  } else {
    oddSum += i;
  }
  i++; // incrementation
}
console.log(oddSum, evenSum);
```

**OUTPUT:**
9 12 


### 11.Write a program to merge two arrays?

**ALGORITHM:**
* Step 1. Start the program.
* Step 2. Declare two arrays arr1,arr2.
* Step 3. creat the new array.
* Step 4. Concatenate the arr1 and arr2.
* Step 5. Print the new array.
* Step 6. Stop.

**PSEUDOCODE:**
```
BEGIN
INIT arr1;
INIT arr2;
CREATE new arr
  CONCAT arr1 with arr2
PRINT new arr
END
```

***CODE***
```jS
var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];
const newarr = arr1.concat(arr2); 
console.log(newarr);
```

**OUTPUT:**
Array(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

### 12.Remove duplicate from an array of an object by id and name?

**ALGORITHM:**
* Step 1. Start the program.
* Step 2. Create an array with values.
* Step 3: Use the map function and .map will iterate through all items in array.
* Step 3. Use filter function which will create new array without duplicates.
* Step 4. Print the result which is filtered.
* Step 5: Stop the program.

**PSEUDOCODE:**
```
BEGIN
INIT arr
DECLARE arr and assign the values
  ITERATE ids=arr.map(o=>o.id)
  const filtered=arr.filter(({id},index) => !ids.includes(id,index+1))
PRINT RESULT
END
```

***CODE:***
```javascript
var arr = [
    {id: 1, name: 'Stephen covey'},
    {id: 2, name: 'Robin Sharma' }, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 5, name: 'James clear'}
];
const ids=arr.map(o => o.id)
const filtered=arr.filter(({id},index) => !ids.includes(id,index+1))
console.log(filtered)
```

**OUTPUT:**
Array(4) [ {…}, {…}, {…}, {…} ]
​
0: Object { id: 1, name: "Stephen covey" }
​
1: Object { id: 2, name: "Robin Sharma" }
​
2: Object { id: 3, name: "Tolstoy" }
​
3: Object { id: 5, name: "James clear" }
​
length: 4

### 13.Compare two objects, If all properties are equal return true or return false?

**ALGORITHM:**
* Step 1: Start the program.
* Step 2: Declare the two arrays and assign the values.
* Step 3: Check if the entries in both the arrays are same or not.
* Step 4: If same print true,if not print false.
* Step 5: Stop the program.

**PSEUDOCODE:**
```
BEGIN
INIT arr1,arr2
DECLARE arrays and assign the values
  IF(Object.entries(arr1).toString() === Object.entries(arr2).toString())
   PRINT true
  ELSE
   PRINT false
  ENDIF
END
```

***CODE***
```javascript
const arr1=[{id: 1, name: 'edison'}, {id: 1, name: 'edison'}];
 const arr2=[{id: 1, name: 'edison'},{id: 2, name: 'edison'}];

if(Object.entries(arr1).toString() === Object.entries(arr2).toString()) {
console.log("true")
} else{
    console.log("false")
}
```
**OUTPUT:**
true

### 14.Take a multidimensional array and flat the array?[1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]]
**ALGORITHM:**
* Step 1. Start the program.
* Step 2. Create a muiltidimentional array.
* Step 3. Use multi.flat to flat the array to single array.
* Step 4. Print the Array.

**PSEUDOCODE:**
```
BEGIN
INIT arr = [1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]]
PRINT (arr.flat(3));
END
```

***CODE***
```javascript
let arr = [1,4,2,3,[10,20,20], [100,500,700,600],
[2000,1000]]
console.log(arr.flat(3));

//Another method
let arr = [1,4,2,3,[10,20,20], [100,500,700,600],
[2000,1000]]
console.log(arr.flat(Infinity));
```
**OUTPUT:**
Array(13) [ 1, 4, 2, 3, 10, 20, 20, 100, 500, 700, … ]
​
0: 1
​
1: 4
​
2: 2
​
3: 3
​
4: 10
​
5: 20
​
6: 20
​
7: 100
​
8: 500
​
9: 700
​
10: 600
​
11: 2000
​
12: 1000
​
length: 13
​

### 15.Group by the id of the following array of objects using the Array.reduce method?[{id: 1, name: ‘edison’ }, {id: 2, name: ‘Annand’ }, {id: 3, name: ‘Vasnath’}] 
**ALGORITHM:**
* Step 1. Start the program.
* Step 2. Declare the array of objects.
* Step 3. Use the reduce function to iterate previous value with current value.
* Step 4. Check the both value and add count into previous value or make it one
* Step 5. Print the value.
* Step 6. Stop the program.

**PSEUDOCODE:**
```
BEGIN
INIT arr=[
    {id: 1, name: 'edison' }, 
    {id: 2, name: 'Annand' }, 
    {id: 3, name: 'Vasnath'}
];
INIT groupByid = arr.reduce((r, intex) => {
    r[intex.id] = r[intex.id] + 1 || 1;
    RETURN r;
PRINT (groupByid); 
END
```
***CODE***
```js
var arr=[{id: 1, name: 'edison'}, {id: 2, name: 'Annand'}, {id: 3, name: 'Vasnath'}]
let groupbyid = arr.reduce((r, index) => {
    r[index.id]=index[r.id]+1 || 1
     return r;
    }, {});
    console.log(groupbyid);
```
**OUTPUT:**
Object { 1: 1, 2: 1, 3: 1 }
​
1: 1
​
2: 1
​
3: 1

### 16.Write a program in Javascript to display the pattern like right angle triangle using an asterisk.The pattern like :
**ALGORITHM:**
* Step 1. Start the program.
* Step 2. Declare variable with 5 value and make another one with empty string.
* Step 3. Run for loop 5 times then run the nested for loop i times.
* Step 4. Add the "*" in nested loop and add /n at the end of nested loop.
* Step 5. Then print the string values.
* Step 6. Stop the program.

**PSEUDOCODE:** 
```
BEGIN
INIT n = 5;
INIT string = "";
FOR(let i = 1; i <= n; i++) 
  FOR (let j = 0; j < i; j++) 
    SET string += "*";
    ENDFOR
  SET string += "\n";
  ENDFOR
PRINT (string);
```

***CODE***
```js
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
```

OUTPUT:
*
**
***
****
*****

### 17.Write a program in Javascript to make such a pattern like right angle triangle with number increased by 1

**ALGORITHM:**
* Step 1. Start the program.
* Step 2. Declare variable with 4 value and make another one with empty string.
* Step 3. Declare count variable at public with number 1.
* Step 4. Run for loop 4 times then run the nested for loop i times.
* Step 5. Add the count value to a variable as string and increment it.
* Step 6. Add the count in nested loop and add /n at the end of nested loop.
* Step 7. Print the string variable.
* Step 8. Stop the program.

**PSEUDOCODE:**
```
BEGIN 
INIT n = 4; 
INIT string = "";
INIT count = 1;
FOR(let i = 1; i <= n; i++)
   FOR(let j = 1; j <= i; j++)
     SET string += " " + count;
     SETcount++;
     ENDFOR
   SET string += "\n";
   ENDFOR
PRINT (string);
END
```

***CODE***
```js
let n = 4;
let string = "";
let count=1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <=i; j++) {
    string += " "+count;
    count++;
  }
  string += "\n";
}
console.log(string);
```
OUTPUT:
1
2 3
4 5 6
7 8 9 10

### 18.Write a program in Javascript to make such a pattern like a pyramid with numbers increased by 1

**ALGORITHM:**
* Step 1. Start the program.
* Step 2. Declare count variable at public with number 1 and a empty string.
* Step 3. Run for loop 4 times then run the nested for loop 5 - i times for print spaces.
* Step 4. Then create the another loop for printing the values.
* Step 5. Add the count value to a variable as string and increment count.
* Step 6. Print the result.
* Step 7. Stop the program.

**PSEUDOCODE:**
```
INIT rows=4;
INIT num="";
INIT count=1;
FOR(var i=1;i<=rows;i++)
    FOR(var k=1;k<=(rows-i);k++)
       SET num+= " ";
    FOR(var j=1;j<=i;j++)
     SET num+=count;
     SET count++;
     SET num+=" ";
    ENDFOR
    num+= "\n";
    ENDFOR
PRINT number
```

***CODE***
```js
var rows=4;
let num="";
let count=1;
for(var i=1;i<=rows;i++)
{
    for(var k=1;k<=(rows-i);k++)
    { 
        num+= " ";
    }
    for(var j=1;j<=i;j++)
    {
      num+=count;
      count++;
      num+=" ";
    }
    num+= "\n";
}
console.log(num);
```
OUTPUT:
   1
  2 3
 4 5 6
7 8 9 10


### 19.Write a program in Javascript to display the pattern like a diamond

**ALGORITHM:**
* Step 1. Start the program.
* Step 2. Declare n variable at public with number 1 and a empty string.
* Step 3. Run for loop nth times do spaces then run the nested for loop 2*i-1 times for print stars.
* Step 4. Add /n at the end of nested loop.
* Step 5. Again run loops to print reverse prymid.
* Step 6. for loop nth - 1 times do spaces then run the nested for loop 2*(n-1) times for print stars.
* Step 7. Add /n at the end of nested loop.
* Step 8. Stop the program.

**PSEUDOCODE:**
```
BEGIN
INIT n=5;
INIT string= "";
FOR(var i=1;i<=n;i++)
    FOR(var k=1;k<=n - i + 1;k++) 
        SET string+= " ";
    FOR(var j=1;j<=2 * i-1;j++)
      SET string+="*";
    SET string+= "\n";
FOR(let i = 1; i <= n - 1; i++) 
    FOR(let j = 1; j < i+1; j++) 
      SET string += " ";
    FOR(let k = 1;k <= 2 * (n - i) - 1;k++) 
      SET string += "*";
    SET string += "\n";
    ENDFOR
PRINT string
END
```

***CODE***
```js
var n=5;
let string= "";
for(var i=1;i<=n;i++)
{
    for(var k=1;k<=n - i + 1;k++)
    { 
        string+= " ";
    }
    for(var j=1;j<=2 * i-1;j++)
    {
      string+="*";
    }
    string+= "\n";
}
//Reverse pyramid
for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 1; j < i+1; j++) {
      string += " ";
    }
    // printing star
    for (let k = 1;k <= 2 * (n - i) - 1;k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
  ```
OUTPUT:

    *
   ***
  *****
 *******
*********
 *******
  *****
   *** 
    *
