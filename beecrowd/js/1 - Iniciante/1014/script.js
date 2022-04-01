var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let X = parseInt(lines.shift());
let Y = parseFloat(lines.shift());

let consumo = (X / Y).toFixed(3);

console.log(consumo + ' km/l');