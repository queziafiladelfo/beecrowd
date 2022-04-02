var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

// Leia 4 valores inteiros A, B, C e D. A seguir, 
// se B for maior do que C e se D for maior do que A, 
// e a soma de C com D for maior que a soma de A e B e se C e D, 
// ambos, forem positivos e se a variável A for par escrever a 
// mensagem "Valores aceitos", senão escrever "Valores nao aceitos".
// 5 6 7 8 || 2 3 2 6

let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseInt(lines.shift());
let D = parseInt(lines.shift());

let BmaiorC = B > C; 
let DmaiorA = D > A; 
let soma = (C + D) > (A + B); 
let positivosCD = (C > 0) && (D > 0); 
let A_Par = A % 2 === 0; 

const teste = BmaiorC && DmaiorA && soma && positivosCD && A_Par;

if(teste){
    console.log('Valores aceitos');
} else {
    console.log('Valores nao aceitos');
}



