// ## Exercício 2 — Posto na Av. Santo Amaro: álcool ou gasolina?
// Regra prática: o álcool compensa quando seu preço é **menor ou igual a 70% do preço da gasolina**.
// Peça o **preço do litro do álcool** e o **preço do litro da gasolina**. Calcule a proporção e diga qual combustível vale mais a pena abastecer.

let alcool = parseFloat(prompt("Qual o preço do álcool?"));
let gasolina = parseFloat(prompt("Qual o preço da gasolina?"));

let valorEmConta = alcool / gasolina;

if (valorEmConta <= 0.7){
    alert("Vale mais a pena abastecer com o alcool");
}else{
    alert("Vale mais a pena abastecer com a gasolina");
}