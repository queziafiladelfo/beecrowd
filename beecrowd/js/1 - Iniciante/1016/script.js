var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

//x = 60 
//y =90
let entrada = parseInt(lines.shift());
entrada *= 2;

console.log(`${entrada} minutos`);
