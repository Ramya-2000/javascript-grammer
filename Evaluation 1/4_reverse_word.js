"use strict"
function reverse (word) {
    word = word.split(" ").reverse().join(" ")
    return word
}
word = 'Yavar Tech Works'
console.log(reverse(word));