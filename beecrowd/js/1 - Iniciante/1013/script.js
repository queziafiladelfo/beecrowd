var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

let MaiorAB = (a +  b + Math.abs(a - b)) / 2;
let Maior = (MaiorAB +  c + Math.abs(MaiorAB - c)) / 2;

console.log(Maior + " eh o maior");