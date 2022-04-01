var input = require('fs').readFileSync('stdin', 'utf8');
var valor = parseFloat(input);

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
let resultNotas = [];
let resultMoedas = [];

for(let nota of notas){
    resultNotas.push(parseInt(valor / nota));
    valor = valor % nota;
}

for(let moeda of moedas){
    resultMoedas.push(parseInt(valor / moeda));
    valor = valor % moeda;
}

console.log('NOTAS:');
for(let i = 0; i < notas.length; i++){
    console.log(`${resultNotas[i]} nota(s) de R$ ${notas[i]}.00`);
}

console.log('MOEDAS:');
for(let i = 0; i < moedas.length; i++){
    console.log(`${resultMoedas[i]} moeda(s) de R$ ${moedas[i].toFixed(2)}`);
}