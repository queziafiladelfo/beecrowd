var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


 let A = parseFloat(lines.shift());
 let B = parseFloat(lines.shift());
 let C = parseFloat(lines.shift());
 let D = parseFloat(lines.shift());
 
 let DIFERENCA = (A * B - C * D);
 
 console.log(`DIFERENCA = ${DIFERENCA}`);