// ## Exercício 3 — Média de notas na UNISA
// Um aluno tem **3 notas** no semestre. Peça as três, calcule a **média**, e classifique:
// - média **≥ 7** → Aprovado
// - média **≥ 5 e < 7** → Recuperação
// - média **< 5** → Reprovado

let nota1 = parseFloat(prompt("Digite a primeira nota"));
let nota2 = parseFloat(prompt("Digite a segunda nota"));
let nota3 = parseFloat(prompt("Digite a terceira nota"));

let media = (nota1 + nota2 + nota3) /3;

console.log(media);

if (media >= 7){
    alert("Parabéns você foi aprovado!!");
}
else if (media >= 5){
    alert("Cuidado!! Você ficou em recuperação.");
}
else{
    alert("Você foi reprovado...");
}