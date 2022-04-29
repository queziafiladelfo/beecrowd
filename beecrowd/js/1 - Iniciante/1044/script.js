//Multiplos - 1044
/*
Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem 
"Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são 
múltiplos entre si.

Entrada
A entrada contém valores inteiros.

Saída
A saída deve conter uma das mensagens conforme descrito acima.

Exemplo de Entrada | Exemplo de Saída
 6 24               | Sao Multiplos  

*/ 

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let A =  parseInt(lines.shift());
let B =  parseInt(lines.shift());
let multiplo = A % B  === 0 || B % A === 0;


if(multiplo){
    console.log("Sao Multiplos");
} 
else {
    console.log("Nao sao Multiplos");
} 