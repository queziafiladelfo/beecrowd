var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


//peça 1
let Peca_1 = lines.shift().split(" ");
let Peca_2 = lines.shift().split(" ");

//console.log(Peca_1);
//console.log(Peca_2);


let numPeca_1 = parseInt(Peca_1.shift());
let qtdPeca_1 = parseInt(Peca_1.shift());
let precoPeca_1 = parseFloat(Peca_1.shift());


//peca 2
let numPeca_2 = parseInt(Peca_2.shift());
let qtdPeca_2 = parseInt(Peca_2.shift());
let precoPeca_2 = parseFloat(Peca_2.shift());



let valor = (qtdPeca_1 * precoPeca_1) + (qtdPeca_2 * precoPeca_2);

console.log(`VALOR A PAGAR: R$ ${valor.toFixed(2)}`);