//call by value
var a = 5;
    var b;
    b = a;
    a = 3;
    console.log(a);
    console.log(b);

    //call by reference
    var c = { greeting : 'Welcome' };
    var d;
    d = c;
  
    // Mutating the value of c
    c.greeting = 'Welcome to javascript';
    console.log(c);
    console.log(d);