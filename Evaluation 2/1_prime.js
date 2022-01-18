for (var counter = 2; counter <= 200; counter++) {
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