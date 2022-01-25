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
