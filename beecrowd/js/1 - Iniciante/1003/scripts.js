var input = require('fs').readFileSync('../1003/stdin', 'utf8');


var lines = input.split("\n");

var A = Number.parseInt(lines.shift(), 10);
var B = Number.parseInt(lines.shift(), 10);

let SOMA = A + B;

console.log(`SOMA = ${SOMA}`);