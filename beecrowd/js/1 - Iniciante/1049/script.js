var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let condicao1 = (lines.shift().trim() === "vertebrado");
let condicao2 = lines.shift().trim();
let condicao3 = lines.shift().trim();

const caso2 = condicao2 === "ave" && condicao3 === "carnivoro";
const caso3 = condicao2 === "ave" && condicao3 === "onivoro";
const caso4 = condicao2 === "mamifero" && condicao3 === "onivoro";
const caso5 = condicao2 === "mamifero" && condicao3 === "herbivoro";

const caso6 = condicao2 === "inseto" && condicao3 === "hematofago";
const caso7 = condicao2 === "inseto" && condicao3 === "herbivoro";
const caso8 = condicao2 === "anelideo" && condicao3 === "hematofago";
const caso9 = condicao2 === "anelideo" && condicao3 === "onivoro";

if (condicao1) {
    if (caso2) console.log("aguia");
    if (caso3) console.log("pomba");
    if (caso4) console.log("homem");
    if (caso5) console.log("vaca");
} 

else {
    if (caso6) console.log("pulga");
    if (caso7) console.log("lagarta");
    if (caso8) console.log("sanguessuga");
    if (caso9) console.log("minhoca");    
}