// area = π . raio2 |  π = 3.14159:

const pi = 3.14159;

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let raio = (Number.parseFloat(lines.shift(), 10));
let area = pi * (raio**2);

console.log("A=" + area.toFixed(4));
