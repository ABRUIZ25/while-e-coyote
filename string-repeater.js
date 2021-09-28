const prompt = require('prompt-sync')({ sigint: true });

console.log('enter a sting');
let string = prompt('>')

let string1 = string

while (string.length < 10){
    console.log ('string')
    string = string + string1
}

console.log(string)
