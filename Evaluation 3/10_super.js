"use strict";
class Person {                  //parent class
    constructor(name, grade) {
       this.name = name;
       this.grade = grade;
    }
    goal() {
       return `${this.name} want to become scientist`;
    }
    interest() {
       return `${this.name} interested in hockey`;
    }
 }
class Student extends Person {   //child class
  constructor(name, grade) {
    super(name, grade);
    }
    need() {
       return `${this.name} needs a basket ball`;
    }
    career() {
return`${super.goal()}     //accessing parent properties in child class using super method
       ${super.interest()} 
       ${this.need()}`;
    }
 }
const student = new Student("Anu");   //instance of child class 
console.log(student.career());
 