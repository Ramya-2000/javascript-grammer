let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr);

//Another method
let myArray = [1, 2, 3, 4];
  
const returnValue = myArray.map((element) => {
    return element * element;
})
console.log(returnValue);

//reduce function
const numbers=[2,4,6,8];
let sum=0;
for(let n of numbers)
  sum+=n;      
sum=numbers.reduce((accumulator,currentValue) => {
  return accumulator + currentValue;
 },0);

 //Another method
 const array1 = [1, 2, 3, 4];
 const newArray1 = array1.reduce((previousValue, currentValue) => previousValue + currentValue);
 console.log(newArray1);//reduce
 
 //filter 
 const words = ['java', 'javascript', 'elite', 'constructor','yavar','value'];

const result = words.filter(word => word.length <=5);

console.log(result);
