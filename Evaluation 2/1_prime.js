"use strict";
function primeNumber(value){
if(typeof value === "number" && value > 2 ){
for (var counter = 2; counter <= value; counter++) {
    var isPrime=true;
    for (var i = 2; i <= counter; i++) {
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
