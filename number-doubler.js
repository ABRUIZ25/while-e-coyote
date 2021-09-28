const prompt = require('prompt-sync')({ sigint: true });

let number =  prompt ('pick a number')

while( ammount < 100){
    number = number * 2;
    console.log (number)
}
