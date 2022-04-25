var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

const x = parseFloat(lines.shift());
const y = parseFloat(lines.shift());

let q1 = (x > 0) && (y > 0);
let q2 = (x < 0) && (y > 0);
let q3 = (x < 0) && (y < 0);
let q4 = (x > 0) && (y < 0);

if(q1){
    console.log("Q1");
} else if(q2){
    console.log("Q2");
} else if(q3){
    console.log("Q3");
} else if(q4) {
    console.log("Q4");
} else {
    console.log("Origem");
}
