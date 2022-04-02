var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

//delta = b^2 - 4ac
// x = (-b +- sqrt(delta)) / 2a

const divisaoMaiorZero = 2 * A > 0.0;
const delta = Math.pow(B, 2) - 4 * A * C;
const deltaPositivo = delta > 0.0;
const R1 = (- B + Math.sqrt(delta)) / (2 * A);
const R2 = (- B - Math.sqrt(delta)) / (2 * A);

if(divisaoMaiorZero && deltaPositivo) {
    console.log(`R1 = ${R1.toFixed(5)}`);
    console.log(`R2 = ${R2.toFixed(5)}`);
} else {
    console.log('Impossivel calcular');
}

