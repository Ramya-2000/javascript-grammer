var n = 6;
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