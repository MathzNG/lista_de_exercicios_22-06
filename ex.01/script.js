// ## Exercício 1 — Rodízio de placa em São Paulo
// No centro expandido de SP, o rodízio municipal funciona pelo **último dígito da placa**:
// segunda → 1 e 2 · terça → 3 e 4 · quarta → 5 e 6 · quinta → 7 e 8 · sexta → 9 e 0.
// Peça ao usuário o **último número da placa** e o **dia da semana** (digitado por extenso ou como número de 1 a 5). Informe no `console` se o carro **pode ou não circular** naquele dia no horário de rodízio.

let placa = parseInt(prompt("Digite o último número da placa:"));
let diaSemana = prompt("Digite o dia da semana:");
let naoPode = false;

if (diaSemana == "segunda" && (placa == 1 || placa == 2)){
    naoPode = true;
}
else if (diaSemana == "terça" && (placa == 3 || placa == 4)){
    naoPode = true;
}
else if (diaSemana == "quarta" && (placa == 5 || placa == 6)){
    naoPode = true;
}
else if (diaSemana == "quinta" && (placa == 7 || placa == 8)){
    naoPode = true;
}
else if (diaSemana == "sexta" && (placa == 9 || placa == 0)){
    naoPode = true;
}

if (naoPode == false){
    alert("Você não pode circular hoje!!");
}
if(naoPode == true){
    alert("Você pode circular hoje!!");
}

