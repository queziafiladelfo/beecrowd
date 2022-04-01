var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let tempoGasto = parseInt(lines.shift());
let velocidadeMedia = parseInt(lines.shift());

const carro = 12;

let litros = (tempoGasto * velocidadeMedia) / carro;

console.log(litros.toFixed(3));