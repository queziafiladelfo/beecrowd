var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const codItem = parseInt(lines.shift());
const qtd = parseInt(lines.shift());
var preco = 0;


const itens = [4.00, 4.50, 5.00, 2.00, 1.50];

for(let i = 0; i < itens.length; i++) {
    if( (i + 1) === codItem)
        preco = itens[i] * qtd;
}

console.log('Total: R$ ' + preco.toFixed(2));