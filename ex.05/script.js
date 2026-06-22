// ## Exercício 5 — Entrada na balada
// Peça a **idade** da pessoa. Regras da casa:
// - menos de 18 → não entra
// - 18 ou 19 → entra, mas paga ingresso cheio (R$ 40)
// - 20 ou mais → entra com desconto (R$ 25)
// Mostre no `alert` se a pessoa entra e qual o valor do ingresso.

let idade = parseInt(prompt("Qual a sua idade?"));

if (idade < 18){
    alert("Menor de idade não entra!!");
}
else if (idade == 18 || idade == 19){
    alert("Entra, porém é preciso pagar o ingresso cheio!! R$40");
}
else if (idade >= 20){
    alert("Entra com desconto!! R$ 25");
}