//static method
"use strict";
class Mycar{
    static model(){
  return "no new model"
}
}
console.log(Mycar.model());



// static method with same name
"use strict";
class Mycar{
    static model(){
      return "no new model"
    }
    static model(){
        return "ford"
    }
    }
    console.log(Mycar.model());


//invoke static inside regular function
"use strict";
class Mycar{
    static model(){
        return "duster in 2020";
    }
    new1(){
        console.log(Mycar.model());
    }
}
let mycar=new Mycar();
mycar.new1();