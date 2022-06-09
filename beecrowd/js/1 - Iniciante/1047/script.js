var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const horaIinicial = parseFloat(lines.shift());
const minutoInicial = parseFloat(lines.shift());
const horaFinal = parseFloat(lines.shift());
const minutoFinal = parseFloat(lines.shift());
let totalH = horaFinal - horaIinicial;
let totalM = minutoFinal - minutoInicial;

const iguais = horaFinal === horaIinicial && horaFinal === minutoFinal && horaFinal === minutoInicial;

const caso1 = horaIinicial < horaFinal && minutoInicial < minutoFinal; 
const caso2 = horaIinicial < horaFinal && minutoInicial > minutoFinal; 

const caso3 = horaIinicial === horaFinal && minutoInicial < minutoFinal;
const caso4 = horaIinicial === horaFinal && minutoInicial > minutoFinal;

const caso5 = horaIinicial < horaFinal && minutoInicial === minutoFinal;
const caso6 = horaIinicial > horaFinal && minutoInicial === minutoFinal;

const caso7 = horaIinicial > horaFinal && minutoInicial > minutoFinal;
const caso8 = horaIinicial > horaFinal && minutoInicial < minutoFinal;

if (iguais) {
    console.log(`O JOGO DUROU ${24} HORA(S) E ${0} MINUTO(S)`);
} else if (caso1) {
    console.log(`O JOGO DUROU ${totalH} HORA(S) E ${totalM} MINUTO(S)`);
} else if(caso2) {
    totalH -= 1;
    totalM += 60;
    console.log(`O JOGO DUROU ${totalH} HORA(S) E ${totalM} MINUTO(S)`);
} else if(caso3) {
    totalH = 0;    
    console.log(`O JOGO DUROU ${totalH} HORA(S) E ${totalM} MINUTO(S)`);
} else if(caso4) {
    totalH = 23;
    totalM += 60;
    console.log(`O JOGO DUROU ${totalH} HORA(S) E ${totalM} MINUTO(S)`);
} else if(caso5) {
    //totalH += 24;
    totalM = 0;
    console.log(`O JOGO DUROU ${totalH} HORA(S) E ${totalM} MINUTO(S)`);
} else if(caso6) {
    totalH += 24;
    totalM = 0;
    console.log(`O JOGO DUROU ${totalH} HORA(S) E ${totalM} MINUTO(S)`);
} else if(caso7) {
    totalH += 23;
    totalM += 60;
    console.log(`O JOGO DUROU ${totalH} HORA(S) E ${totalM} MINUTO(S)`);
} else if(caso8) {
    totalH += 24;
    console.log(`O JOGO DUROU ${totalH} HORA(S) E ${totalM} MINUTO(S)`);
} 


