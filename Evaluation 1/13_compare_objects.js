
const arr1=[{id: 1, name: 'edison'}, {id: 1, name: 'edison'}];
 const arr2=[{id: 1, name: 'edison'},{id: 2, name: 'edison'}];

if(Object.entries(arr1).toString() === Object.entries(arr2).toString()) {
console.log("true")
} else{
    console.log("false")
}