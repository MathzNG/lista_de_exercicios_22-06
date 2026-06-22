// ## Exercício 8 — Bilhete Único: vale a integração?
// Peça o **número de conduções** que a pessoa vai pegar no dia e o **valor da tarifa cheia**. Regra simplificada: a partir da **segunda** condução dentro da janela de integração, paga-se **metade** da tarifa.
// Calcule o **gasto total do dia**:
// - 1 condução → tarifa cheia
// - 2 ou mais → primeira cheia + as demais pela metade

let numConducao = parseInt(prompt("Quantas conduções ira pegar hoje?")); 
let valorTarifaCheia = parseFloat(prompt("Qual o valor da tarifa cheia?")); 

if (numConducao > 1){
    let segundaConducao = numConducao - 1;
    let valorMetade = segundaConducao * (valorTarifaCheia / 2); 
    let valorFinal = valorTarifaCheia + valorMetade;
    alert(`O valor total de condução do dia é: ${valorMetade}.`);
}
else{
    let valorFinal = valorTarifaCheia;
     alert(`O valor total de condução do dia é: ${valorFinal}.`);
}


