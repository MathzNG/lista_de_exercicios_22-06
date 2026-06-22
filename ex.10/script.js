// ## Exercício 10 — Conta de luz da república
// Três estudantes dividem um apê perto da faculdade. Peça o **valor da conta de luz** e o **número de moradores**. Pergunte também se **algum morador usou ar-condicionado** o mês todo (`prompt` "sim"/"nao").
// - Se **não** usou ar: divide a conta igualmente entre todos.
// - Se **usou**: esse morador paga **40% da conta**, e o restante (60%) é dividido igualmente entre **todos** os moradores.
// Mostre quanto cada um paga no `console`.

//"Existe alguma possibilidade desse número ser 0?"

let valorLuz = parseFloat(prompt("Qual o valor da conta de luz?"));
let moradores = parseFloat(prompt("Quantos moradores são na casa?"));
let usouArCondicionado = prompt("Algum morador usou o ar-condicionado o mês todo? (sim/nao)");

if(moradores < 2 && usouArCondicionado == "sim"){
    alert("Você mora sozinho!! Então pague o valor total =)");
}
else if (usouArCondicionado == "sim"){
    let valorMoradorDoAr = valorLuz * 0.4;
    let valorQueSobrou = valorLuz * 0.6;
    let quantidadeMoradorRestante = moradores - 1; 
    let valorFinalADividir = valorQueSobrou / quantidadeMoradorRestante;

    alert(`Morador que usou o ar: R$ ${valorMoradorDoAr}
        Cada um dos outros moradores paga: R$ ${valorFinalADividir}`);
}
else{
    let valorFinal = valorLuz / moradores;
    alert(`O valor dividio entre os moradores é de: ${valorFinal} R$`);
}

