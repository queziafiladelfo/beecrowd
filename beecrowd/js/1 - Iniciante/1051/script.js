var input = require('fs').readFileSync('stdin', 'utf8');
var valor = parseFloat(input.split().shift());

function calculaImposto(e, v){
    let taxa;
    switch(e){
        case 1:
            taxa = (v - 2000) * 0.08;
            break;
        case 2:
            taxa = ((v - 3000) * 0.18) + (1000 * 0.08);
            break;
        case 3:
            taxa = ((v - 4500) * 0.28) + (1500 * 0.18) + (1000 * 0.08);
            break;    
    }

    imprimeResultado(taxa.toFixed(2));
}

function imprimeResultado(resultado){
    return console.log(`R$ ${resultado}`);
}

const isento = valor >= 0.00 && valor <= 2000.00;
const imposto_8 = valor >= 2000.01 && valor <= 3000.00;
const imposto_18 = valor >= 3000.01 && valor <= 4500.00;
const imposto_28 = valor > 4500.00; 

if (isento) console.log("Isento");
if (imposto_8) calculaImposto(1, valor);
if (imposto_18) calculaImposto(2, valor);
if (imposto_28) calculaImposto(3, valor);
