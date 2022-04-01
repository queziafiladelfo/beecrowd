var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// 100, 50, 20, 10, 5, 2 e 1

let valor = parseInt(lines.shift());

let cem = (valor - (valor % 100)) / 100;
let troco = valor - (cem * 100);
let cinquenta = (troco - (troco % 50)) / 50;
troco = troco - (cinquenta * 50);
let vinte = (troco - (troco % 20)) / 20;
troco = troco - (vinte * 20);
let dez = (troco - (troco % 10)) / 10;
troco = troco - (dez * 10);
let cinco = (troco - (troco % 5)) / 5;
troco = troco - (cinco * 5);
let dois = (troco - (troco % 2)) / 2;
troco = troco - (dois * 2);
let um = (troco - (troco % 1)) / 1;
troco = troco - (um * 1);


console.log(valor);
console.log(`${cem} nota(s) de R$ 100,00`);
console.log(`${cinquenta} nota(s) de R$ 50,00`);
console.log(`${vinte} nota(s) de R$ 20,00`);
console.log(`${dez} nota(s) de R$ 10,00`);
console.log(`${cinco} nota(s) de R$ 5,00`);
console.log(`${dois} nota(s) de R$ 2,00`);
console.log(`${um} nota(s) de R$ 1,00`);
