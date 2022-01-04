var str = "Technologies";
var arr=str.split('')
if(arr.reverse().join('') === str){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}