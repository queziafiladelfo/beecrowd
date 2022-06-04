var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const x = parseFloat(lines.shift());
const y = parseFloat(lines.shift());

let origin = (x + y === 0.0); 
let eixoX = y === 0.0;
let eixoY = x === 0.0;
let q1 = (x > 0) && (y > 0);
let q2 = (x < 0) && (y > 0);
let q3 = (x < 0) && (y < 0);
let q4 = (x > 0) && (y < 0);

if (origin) {
    console.log("Origem");
} else if(eixoX){
    console.log("Eixo X");
} else if(eixoY){
    console.log("Eixo Y");
} else if(q1){
    console.log("Q1");
} else if(q2){
    console.log("Q2");
} else if(q3){
    console.log("Q3");
} else if(q4) {
    console.log("Q4");
} 
