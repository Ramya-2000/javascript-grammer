
var arr=[
let k1=({id: 1, name: “edison”}, {id: 1, name: “edison”})
 const k2=({id: 1, name: “edison”},{id: 2, name: “edison”})
];
Object.entries(k1).toString() === Object.entries(k2).toString();
// true
console.log("true")
else{
    console.log("false");
}