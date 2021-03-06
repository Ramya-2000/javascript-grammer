// define a function
const myFunction = () => {
    console.log(this);
  };
  
  // call it
  myFunction();  //Output is {}

  "use strict";
  const channel={
    title: "Javascript",
    languages: ["tamil","english"],
    subscribe : () => {
        console.log(this.title); //arrow function doesnot bind 'this'
    },
    Showvideos(){
        let sub = () => {
            console.log(this.title);
        }
        sub();
        console.log(this.languages); //normal function bind 'this'
    },
};
channel.subscribe(); 
channel.Showvideos();

