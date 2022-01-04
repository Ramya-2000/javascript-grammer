var str = "Yavar Tech Works";
function rev(str){
    var arr = str.split(" ");
    var reverse = arr.map(i=>{
        return i.split('').reverse().join("");
    });
    return reverse.join(" ");
}
console.log(rev(str));