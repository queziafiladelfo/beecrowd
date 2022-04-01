var input = require('fs').readFileSync('stdin', 'utf8');

// segundos
let segundos = parseInt(input);

const valores = [3600, 60, 1];
const resultado = [];

for(let valor of valores){
    resultado.push( parseInt(segundos / valor) );
    segundos = segundos % valor;
}


// horas:minutos:segundos
console.log(resultado.join(":"));