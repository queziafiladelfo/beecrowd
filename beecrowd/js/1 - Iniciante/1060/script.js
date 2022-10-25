var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let cont = 0;
let number = ''

while(lines.length !== 0) {
    number = lines.shift().trim();
    if(number > 0 ) {cont++;}
}

console.log(cont + " valores positivos");