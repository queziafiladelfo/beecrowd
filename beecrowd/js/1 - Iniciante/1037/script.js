var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const valor = parseFloat(lines.shift());

const intervalo_01 = (valor >= 0) && (valor <= 25);
const intervalo_02 = (valor > 25) && (valor <= 50);
const intervalo_03 = (valor > 50) && (valor <= 70);
const intervalo_04 = (valor > 70) && (valor <= 100);

if(intervalo_01){
    console.log('Intervalo [0,25]');
} 
else if (intervalo_02) {
    console.log('Intervalo (25,50]');
}
else if(intervalo_03){
    console.log('Intervalo (50,75]');
}
else if (intervalo_04){
    console.log('Intervalo (75,100]');
}
else{
    console.log('Fora de intervalo');
}

