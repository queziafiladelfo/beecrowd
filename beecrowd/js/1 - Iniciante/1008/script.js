var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


 let numFunc = parseInt(lines.shift());
 let horasTrabalho = parseInt(lines.shift());
 let valorHora = parseFloat(lines.shift());
 
 let salary = horasTrabalho * valorHora;
 
 console.log(`NUMBER = ${numFunc}`);
 console.log(`SALARY = U$ ${salary.toFixed(2)}`);