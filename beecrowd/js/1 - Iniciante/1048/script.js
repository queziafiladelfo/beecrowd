var input = parseFloat(require('fs').readFileSync('stdin', 'utf8'));
//var lines = input.split(' ');

function reajusteSalario(input, percentualReajuste) {    
    let reajusteGanho = (input * percentualReajuste) / 100;
    let novoSalario = input + reajusteGanho;

    imprimirSaida(novoSalario, reajusteGanho, percentualReajuste);
}

function imprimirSaida(novoSalario, reajusteGanho, percentualReajuste){
    const saida = `Novo salario: ${novoSalario.toFixed(2)}
Reajuste ganho: ${reajusteGanho.toFixed(2)}
Em percentual: ${percentualReajuste} %`;

    console.log(saida);
}

const salario_01 = input >= 0 && input <= 400.00;
const salario_02 = input > 400.00 && input <= 800.00;
const salario_03 = input > 800.00 && input <= 1200.00;
const salario_04 = input > 1200.00 && input <= 2000.00;
const salario_05 = input > 2000.00;

if (salario_01) {
    reajusteSalario(input, 15);
} else if (salario_02) {
    reajusteSalario(input, 12);
} else if (salario_03) {
    reajusteSalario(input, 10);
} else if (salario_04) {
    reajusteSalario(input, 7);
} else if (salario_05) {
    reajusteSalario(input, 4);
}