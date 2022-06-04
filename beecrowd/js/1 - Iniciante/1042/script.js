var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let valores = [];
let valoresCrescente = [];

valores = lines.map((item) => parseInt(item));
valoresCrescente = [...valores];

valoresCrescente.sort((a, b) =>  a - b);

for (let valor of valoresCrescente) {
    console.log(valor);
}

console.log();

for (let valor of valores) {
    console.log(valor);
}