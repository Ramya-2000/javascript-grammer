### 1.PRIME NUMBER

**ALGORITHM:**
* Step 1.Start the program.
* step 2 Write a function with parameter and assign a variable.
* Step 3.If the number is one or string or less than one ,Print as enter the valid value.
* Step 4.Number is greater than one means execute the for loop.
* Step 5. Check the condition n%i===0.If true means it return not a prime number.
* Step 6. If condition fails it will return as prime number.
* Step 7. Stop the program.

**PSEUDOCODE:**
```
BEGIN
   FUNCTION isPrime(n)
    IF(n === 1 || typeof n === "string"|| n < 1) 
    output = "Enter the valid value"
       ELSEIF(n > 1) 
    FOR (let i=2;i<n;i++)
         IF (n%i===0)
         RETURN number is not a prime number
         ENDIF
    ENDFOR
         RETURN number is  prime number
    RETURN OUTPUT
   ENDFUNCTION
END 
```

***CODE:***
```js
"use strict"; 
function isPrime(n){
if (n === 1 || typeof n === "string"|| n < 1) {
    output = "Enter the valid value";
}
else if (n > 1) {
    for(let i=2;i<n;i++){
        if(n%i ==0){
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`
}
return output;
}
console.log(isPrime("ten"));
console.log(isPrime(25));
console.log(isPrime(19)); 
```
**OUTPUT:**
```js
Enter the valid value
25 is not a prime number 
19 is a prime number 
```



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
"use strict"
var one = 1;
var one_again = 1;
var one_str= "1";  

console.log(one ==  one_again);  // true
console.log(one === one_again);  // true
console.log(one ==  one_str); // true
console.log(one === one_str); // false
```

**OUTPUT:**
```js
true 
true 
true
false
```
    

### 3.REVERSE A STRING 

**ALGORITHM**
* STEP 1:Create a function with name as reverseString and pass str as parameter.
* STEP 2:Then Create newString as empty and store the reversed string.
* STEP 3:Iterate th for loop until length of string.
* STEP 4:Return the newString and call the function and pass argument.
* STEP 5: Stop the program.   

**PSEUDOCODE**
```
BEGIN
FUNCTION REVERSESTRING(str)
    SET newString = ""
    FOR(var i = str.length - 1; i >= 0; i--) 
        newString += str[i] 
    RETURN newString
REVERSESTRING("Constructor") 
END
```
***CODE:***
```js
"use strict";
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString("Constructor"));
```
**OUTPUT:**
```js
"rotcurtsnoC"
```

### 4.REVERSE WORDS IN A SENTENCE

**ALGORITHM:**
* step 1. Start the program.
* step 2. Create function with name as reverse and word as parameter.
* Step 3. split the word,reverse the word and join the word.
* Step 4. Return the word and give the sentence.
* Step 5. call the function and print the result.

**PSEUDOCODE:**
```
BEGIN
FUNCTION REVERSE(word) 
    word = word.split(" ").reverse().join(" ")
    RETURN word
word = 'Yavar Tech Works'
RETURN(reverse(word))
```

***CODE:***
```js
"use strict"
function reverse (word) {
    word = word.split(" ").reverse().join(" ")
    return word

}
word = 'Yavar Tech Works'
console.log(reverse(word));
```

**OUTPUT:**
```js
Works Tech Yavar
```

### 5.PALINDROME OR NOT 

**ALGORITHM:**
* Step 1. Start the program
* Step 2. Create function with name as reverse and pass the parameter as str.
* Step 3. Iterate the for loop until length of the string and return the reversed string.
* Step 4. Create a function isPalindrome and pass parameter as str.
* Step 5. Check whether the reversed string and the input string is equal.
* Step 6. If both are equal print as palindrome ,If not print not a palindrome.

**PSEUDOCODE:**
```
BEGIN
FUNCTION REVERSE( str )
    SET rev_str = "";
    FOR( let i = str.length-1 ;i >= 0 ;i--)
      rev_str+= str[i]
    return rev_str
    ENDFOR
  FUNCTION IS_PALINDROME( str )
    reverse_str = reverse(str)
    IF( reverse_str === str)
      RETURN("passed string is palindrome ")
    ENDIF
    ELSE
      RETURN("passed string is not palindrome")
  SET string = "Technology"
  IS_PALINDROME(string)
END
```

***CODE:***
```js
"use strict"
  function reverse( str )
  {
    let rev_str = "";
    for( let i = str.length-1 ;i >= 0 ;i--)
    {
      rev_str+= str[i];
    }
    return rev_str;
  }
  function is_palindrome( str )
  {
    reverse_str = reverse(str);
    if( reverse_str === str)
    {
      console.log("passed string is palindrome ");
    }
    else
    {
      console.log("passed string is not palindrome");
    }
  }
  let string = "Technology";
  is_palindrome(string);
```

**OUTPUT:**
```js
passed string is not palindrome
```


### 6.PROGRAM TO EXPLAIN THE  DIFFERENCE  BETWEEN forEach and map?
**ALGORITHM:**
* Step 1. start the program
* Step 2. Create an array and get the input.
* Step 3. Use the map method with the array and iterate over the elements.
* Step 5. Print the values
* Step 6. stop

**PSEUDOCODE:**
```
BEGIN
SET myArray = [1, 2, 3, 4]  
SET returnValue = myArray.map((element) => 
    RETURN element * element
RETURN returnValue 
END
```

***CODE:***
```js
"use strict"
let myArray = [1, 2, 3, 4];  
const returnValue = myArray.map((element) => {
    return element * element;
})
console.log(returnValue);
```

**OUTPUT:**
```js
Array(4) [ 1, 4, 9, 16 ]
```

**Foreach**
**ALGORITHM**
* Step 1. start the program
* Step 2. Create an array and get the input.
* Step 3. Use the forEach method with the array and do some certain operation.
* Step 5. Print the values
* Step 6. stop

**PSEUDOCODE**
```
BEGIN
INIT myAwesomeArray=
    { id: 1, name: "shree" }
    { id: 2, name: "john" }
    { id: 3, name: "Ali" }
myAwesomeArray.forEach(element =>
 RETURN element.name
END
```

**Code**
```js
"use strict"
const myAwesomeArray = [
    { id: 1, name: "shree" },
    { id: 2, name: "john" },
    { id: 3, name: "Ali" },
  ]
myAwesomeArray.forEach(element => console.log(element.name))
```

**output**
```js
shree 
john 
Ali
```


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
RETURN random
```

***CODE:***
```js
"use strict"
let random=Math.floor(Math.random() * 5) + 1;
console.log(random);
```

**OUTPUT:**
```js
4
3
2
1
```

### 8.REMOVE DUPLICATE FROM THE GIVEN ARRAY [1,2,9,4,5,8,3,5,1,4,5]
**ALGORITHM:**
* Step 1. Start the program
* Step 2. Create a array with number values.
* Step 3. Create an empty array with name as UniqueNumbers.
* Step 4. If two numbers are not equal then print that value in UniqueNumbers.
* Step 5. Print the values where the duplicates will be removed.
* Step 6. stop the program.

***PSEUDOCODE:***
```
BEGIN
INIT numbers = [1,2,9,4,5,8,3,5,1,4,5];
SET uniqueNumbers = [];
numbers.forEach((item) =>  
  IF(!uniqueNumbers.includes(item)) 
       uniqueNumbers.push(item) 
    ENDIF  
RETURN uniqueNumbers
END
```

***CODE:***
```js
"use strict"
const numbers = [1,2,9,4,5,8,3,5,1,4,5];
const uniqueNumbers= [];
numbers.forEach((item) => {  
    if(!uniqueNumbers.includes(item)){  
       uniqueNumbers.push(item);  
    }  
 });  
console.log(uniqueNumbers);
```

**OUTPUT:**
```js
Array(7) [ 1, 2, 9, 4, 5, 8, 3 ]
```

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
 num=num+i; 
PRINT num; 
END FUNCTION
END
```

***CODE:***
```js
"use strict"
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
```js
55
```

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
INIT i=1, n = 100;
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
"use strict"
n = 100;
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
```js
2500  2550
```


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
"use strict"
var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];
const newarr = arr1.concat(arr2); 
console.log(newarr);
```

**OUTPUT:**
```js
Array(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

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
"use strict"
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
```js
Array(4) [ {???}, {???}, {???}, {???} ]
???
0: Object { id: 1, name: "Stephen covey" }
???
1: Object { id: 2, name: "Robin Sharma" }
???
2: Object { id: 3, name: "Tolstoy" }
???
3: Object { id: 5, name: "James clear" }
???
length: 4
```

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
"use strict"
const arr1=[{id: 1, name: 'edison'}, {id: 1, name: 'edison'}];
 const arr2=[{id: 1, name: 'edison'},{id: 2, name: 'edison'}];

if(Object.entries(arr1).toString() === Object.entries(arr2).toString()) {
console.log("true")
} else{
    console.log("false")
}
```
**OUTPUT:**
```js
true
```

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
"use strict";
let arr = [1,4,2,3,[10,20,20], [100,500,700,600],
[2000,1000]]
console.log(arr.flat(3));

//Another method
let arr = [1,4,2,3,[10,20,20], [100,500,700,600],
[2000,1000]]
console.log(arr.flat(Infinity));
```
**OUTPUT:**
```js
Array(13) [ 1, 4, 2, 3, 10, 20, 20, 100, 500, 700, ??? ]
???
0: 1
???
1: 4
???
2: 2
???
3: 3
???
4: 10
???
5: 20
???
6: 20
???
7: 100
???
8: 500
???
9: 700
???
10: 600
???
11: 2000
???
12: 1000
???
length: 13
```

### 15.Group by the id of the following array of objects using the Array.reduce method?[{id: 1, name: ???edison??? }, {id: 2, name: ???Annand??? }, {id: 3, name: ???Vasnath???}] 
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
"use strict"
var arr=[{id: 1, name: 'edison'}, {id: 2, name: 'Annand'}, {id: 3, name: 'Vasnath'}]
let groupbyid = arr.reduce((r, index) => {
    r[index.id]=index[r.id]+1 || 1
     return r;
    }, {});
    console.log(groupbyid);
```
**OUTPUT:**
```js
Object { 1: 1, 2: 1, 3: 1 }
???
1: 1
???
2: 1
???
3: 1
```

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
"use strict"
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
```js
*
**
***
****
*****
```

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
"use strict"
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
```js
1
2 3
4 5 6
7 8 9 10
```

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
"use strict"
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
```js
   1
  2 3
 4 5 6
7 8 9 10
```


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
"use strict"
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
```js

    *
   ***
  *****
 *******
*********
 *******
  *****
   *** 
    *
 ```
