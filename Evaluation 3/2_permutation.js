"use strict";
let string="abmn";
function permutation( string, result){
    if(string.length === 0){
        count++;
        console.log(result);
    }else{
        for(let i = 0; i < string.length ; i++ ){
            let remain = string.substring( 0, i) + string.substring( i + 1 );
            permutation( remain, result + string[i]);
        }
    }
}
if(typeof string === "string"){
    if(string.length > 0){
        var count = 0;
        permutation( string, "");
        console.log("Total number of permutation are :",count);
    }else{
        console.log("This is empty string");
    }

}else{
    console.log("This is not string")
}
