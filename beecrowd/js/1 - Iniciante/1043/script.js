var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

const regra1 = Math.abs(B - C) < A;
const regra2 = Math.abs(A - C) < B;
const regra3 = Math.abs(A - B) < C;

let resultado = 0;

if(regra1 && regra2 && regra3){
    resultado = A + B + C;
    console.log(`Perimetro = ${resultado.toFixed(1)}`);
} else {
    resultado = ((A + B ) * C) / 2;
    console.log(`Area = ${resultado.toFixed(1)}`);
}

