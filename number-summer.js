const prompt = require('prompt-sync')({ sigint: true });

let number = ( prompt ('pick any amount of number till you type done'))
let sum = 0;

while (input !== "done"){
    sum = sum + number("number")
    let number = ( prompt ('pick any amount of number till you type done'))
}

console.log(sum)
