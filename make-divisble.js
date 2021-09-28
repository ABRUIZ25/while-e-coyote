const prompt = require('prompt-sync')({ sigint: true });

let x = prompt('enter number for x')
let y = prompt('enter number for y')

while(x % y != 0){
    x = x +1
    console.log(x)
}
console.log(x, "is divisible by", y)