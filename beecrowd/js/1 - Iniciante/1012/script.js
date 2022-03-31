var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
const pi = 3.14159;

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let TRIANGULO = (A * C) / 2;
let CIRCULO = pi * Math.pow(C, 2);
let TRAPEZIO = ((A + B) * C) / 2;
let QUADRADO = Math.pow(B, 2);
let RETANGULO = A * B;

console.log(`TRIANGULO: ${TRIANGULO.toFixed(3)}`);
console.log(`CIRCULO: ${CIRCULO.toFixed(3)}`);
console.log(`TRAPEZIO: ${TRAPEZIO.toFixed(3)}`);
console.log(`QUADRADO: ${QUADRADO.toFixed(3)}`);
console.log(`RETANGULO: ${RETANGULO.toFixed(3)}`);