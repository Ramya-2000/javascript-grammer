"use strict";
class Person {
    constructor(name,age) {    //constructor method
      this.name = name;
      this.age=age;
    }
  introduce() {       //return name and age 
  return `Hello, my name is ${this.name}`+" "+ `and my age is ${this.age}`;
    }
  }
  const person = new Person('Nirmal','20');    //instance of class
  console.log(person.introduce());