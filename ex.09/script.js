// ## Exercício 9 — Meta de horas de estágio na semana
// Um estagiário tem meta de **30 horas semanais**. Peça as horas trabalhadas de **segunda a sexta** (5 valores). Some o total e calcule a **média diária**.
// Classifique:
// - total **≥ 30** → meta batida
// - total **entre 25 e 29** → quase lá
// - total **< 25** → abaixo da meta
// Mostre total, média diária e a classificação no `console`.


let segunda = parseFloat(prompt("Quantas horas você trabalhou na segunda?"));
let terca = parseFloat(prompt("Quantas horas você trabalhou na terça?"));
let quarta = parseFloat(prompt("Quantas horas você trabalhou na quarta?"));
let quinta = parseFloat(prompt("Quantas horas você trabalhou na quinta?"));
let sexta = parseFloat(prompt("Quantas horas você trabalhou na sexta?"));

let meta = segunda + terca + quarta + quinta + sexta;
let mediaDiaria = (segunda + terca + quarta + quinta + sexta) / 5;

if (meta >= 30){
    alert(`Você bateu a meta!! sua média semanal é: ${meta} e a diaria é: ${mediaDiaria}`);
}
else if(meta >=25 && meta <=29){
    alert(`Você está quase lá!! sua média semanal é: ${meta} e a diaria é: ${mediaDiaria}`);
}
else{
    alert(`Você está abaixo da meta!! sua média semanal é: ${meta} e a diaria é: ${mediaDiaria}`);
}