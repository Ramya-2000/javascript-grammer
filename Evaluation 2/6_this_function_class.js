//inside function
function channel() {
    this.firstName = "unknown";
    this.lastName = "unknown";
}

var channel1 = new channel();
channel1.firstName = "javascript";
channel1.lastName = "tutorial";
            
console.log(channel1.firstName + " " + channel1.lastName);

//inside class
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  
  const myCar = new Car("Ford", 2014);
  console.log(myCar.name + " " + myCar.year);