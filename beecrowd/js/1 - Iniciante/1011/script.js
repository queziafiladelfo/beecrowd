var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
let VOLUME = (4/3.0) * pi * Math.pow(parseint(lines), 3);

console.log(`VOLUME = ${VOLUME.toFixed(3)}`);
