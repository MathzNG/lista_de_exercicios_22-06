// ## Exercício 6 — Rachar a conta do boteco
// A galera fechou a conta num bar do Largo Treze. Peça o **valor total**, o **número de pessoas** e pergunte se vão incluir os **10% do garçom** (`prompt` respondendo "sim" ou "nao").
// - Se incluir os 10%, some-os ao total antes de dividir.
// - Calcule e mostre quanto **cada um paga**.
// - Operações: multiplicação (os 10%), soma, divisão
// - Estrutura: `if / else`
// - Saída: `console.log`

let valorTotal = parseFloat(prompt("Digite o valor total:"));
let numeroPessoa = parseFloat(prompt("Digite o número de pessoas:"));
let valorGarcom = prompt("Vai querer incluir os 10% do garçom?? sim ou nao:");

let valorRachar;

if (valorGarcom == "sim"){
    valorRachar = (valorTotal + (valorTotal * 0.1)) / numeroPessoa;
    alert(`Valor divido por pessoa com os 10% do garçom é: ${valorRachar}`);     
}else{
    valorRachar = valorTotal / numeroPessoa;
    alert(`Valor divido por pessoa sem os 10% do garçom é: ${valorRachar}`);
}