function java(func){
    //call function only if it is function
    if(typeof func == "function")
      console.log(func());
      else
      console.log("Its not a function");
}
var obj ={};
java(obj);