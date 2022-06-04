// Tipos de triangulos
/*
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, 
de modo que o lado A representa o maior dos 3 lados. A seguir, determine o 
tipo de triângulo que estes três lados formam, com base nos seguintes casos, 
sempre escrevendo uma mensagem adequada:
    se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
    se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
    se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
    se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
    se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
    se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES

Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).

Saída
Imprima todas as classificações do triângulo especificado na entrada.

---------------------------------------------
Exemplos de Entrada	| Exemplos de Saída
---------------------------------------------
  7.0 5.0 7.0       | TRIANGULO ACUTANGULO
                    | TRIANGULO ISOSCELES
---------------------------------------------                      
  6.0 6.0 10.0      | TRIANGULO OBTUSANGULO
                    | TRIANGULO ISOSCELES
---------------------------------------------                      
  6.0 6.0 6.0       | TRIANGULO ACUTANGULO
                    | TRIANGULO EQUILATERO 
---------------------------------------------                             
  5.0 7.0 2.0       | NAO FORMA TRIANGULO          
---------------------------------------------                    
  6.0 8.0 10.0      | TRIANGULO RETANGULO           
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let naoFormaRetangulo = A >= (B+C) || B >= (A+C) || C >= (A+B);

let trianguloRetangulo =     (Math.pow(A,2) === Math.pow(B,2) + Math.pow(C,2))
                          || (Math.pow(B,2) === Math.pow(A,2) + Math.pow(C,2))
                          || (Math.pow(C,2) === Math.pow(A,2) + Math.pow(B,2));

let trianguloObtusangulo =   (Math.pow(A,2) > (Math.pow(B,2) + Math.pow(C,2)))
                          || (Math.pow(B,2) > (Math.pow(A,2) + Math.pow(C,2)))
                          || (Math.pow(C,2) > (Math.pow(A,2) + Math.pow(B,2)));

let trianguloAcutangulo =    (Math.pow(A,2) < (Math.pow(B,2) + Math.pow(C,2)))
                          || (Math.pow(B,2) < (Math.pow(A,2) + Math.pow(C,2)))
                          || (Math.pow(C,2) < (Math.pow(A,2) + Math.pow(B,2)));

let trianguloEquilatero = A === B && A === C && B === C;
let trianguloIsoceles = ( ((A === B) && (A !== C) && (B !== C)) || ((C === A) && (C !== B))); 

if(naoFormaRetangulo) {
    console.log("NAO FORMA TRIANGULO");
} else {
    if(trianguloRetangulo) {
        console.log("TRIANGULO RETANGULO");
    } 
    if(trianguloObtusangulo) {
        console.log("TRIANGULO OBTUSANGULO");
    } 
    if(trianguloAcutangulo && !trianguloRetangulo && !trianguloObtusangulo) {
        console.log("TRIANGULO ACUTANGULO");
    } 
    if(trianguloEquilatero ) {
        console.log("TRIANGULO EQUILATERO");
    } 
    if(trianguloIsoceles) {
        console.log("TRIANGULO ISOSCELES");
    } 
}