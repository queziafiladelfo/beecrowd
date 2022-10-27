var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
//let cont = 0;
let cont2 = 0;

// for (const line in lines) {
//     //console.log(line);
//     if(line % 2 === 0) cont++;
// }

// for que funciona no beecrowd
for (let i = 0; i <= lines.length; i++) {
    if(i % 2 === 0) cont2++;
    
}

//console.log(`${cont} valores pares`);
console.log(`${cont2} valores pares`);