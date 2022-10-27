var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let valoresPositivos = 0;
let number = '';
let media = 0, soma = 0;

while(lines.length !== 0) {
    number = lines.shift().trim();
    if(number > 0 ) {
        valoresPositivos++;
        soma = soma + parseFloat(number);
    }
}

media = soma / valoresPositivos;

console.log(`${valoresPositivos} valores positivos
${media.toFixed(1)}`);