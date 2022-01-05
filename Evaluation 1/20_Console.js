//console log()
console.log("javascript");

//console dir()
console.dir([1,2,3])
Array[3]

// console count()
for (let i = 0; i < 5; i++) {
    console.count();
  } 

  //console table()
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  var me = new Person("John", "Smith");
  
  console.table(me);

  //console time() and timeEnd()
  console.time();
  for (let i = 0; i < 10; i++) {
    // some code
  }
  console.timeEnd(); 

  //console trace()
  function java() {
    function yavar() {
      console.trace();
    }
    yavar();
  }
  
  java();

  //console group() and groupEnd()
  console.log("Hello world!");
  console.group();
  console.log("Hello again, this time inside a group!");
  console.groupEnd();
  console.log("and we are back."); 

  
