
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
