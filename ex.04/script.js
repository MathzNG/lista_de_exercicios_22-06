// ## Exercício 4 — Rachar o 99/Uber voltando do rolê
// A dupla está voltando do Largo Treze de madrugada. Peça o **valor da corrida**, o **número de pessoas** que vão dividir e o **multiplicador de tarifa dinâmica** (ex.: 1 = normal, 1.5 = mais caro).
// Calcule o **valor final da corrida** (valor × multiplicador) e quanto **cada pessoa paga**. Se o multiplicador for maior que 1, avise no `console` que a tarifa está em alta antes de mostrar o valor.

let valorCorrida = parseFloat(prompt("Qual o valor da corrida?"));
let numeroPessoa = parseFloat(prompt("Qual o número de pessoas?"));
let tarifa = parseFloat(prompt("Qual o valor da tarifa?"));

let valorFinal = valorCorrida * tarifa / numeroPessoa;

if (tarifa > 1){
    alert(`O valor da tárifa é: ${tarifa}`);
}
alert(`O valor divido por pessoa é: ${valorFinal}`);