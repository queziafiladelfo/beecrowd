var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let nome = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let totalVendas = parseFloat(lines.shift());

let TOTAL = (salarioFixo + (totalVendas * 0.15)).toFixed(2);

console.log(`TOTAL = R$ ${TOTAL}`);

