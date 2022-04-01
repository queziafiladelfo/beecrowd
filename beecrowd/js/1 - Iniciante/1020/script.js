var input = require('fs').readFileSync('stdin', 'utf8');
let totalDias = parseInt(input);

const valores = [365, 30, 1];
const resultado = [];

for(let valor of valores){
    resultado.push( parseInt(totalDias / valor) );
    totalDias = totalDias % valor;
}

console.log(`${resultado[0]} ano(s)`);
console.log(`${resultado[1]} mes(es)`);
console.log(`${resultado[2]} dia(s)`);

