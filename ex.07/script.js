// ## Exercício 7 — Cinema no Shopping SP Market
// Peça o **número de ingressos** e quantos deles são de **meia-entrada (estudante)**. Inteira custa R$ 30, meia custa R$ 15.
// Calcule o **total a pagar**. Depois aplique a regra: se o total passar de **R$ 100**, aplique 5% de desconto no valor final; senão, mantenha. Mostre o valor com e sem desconto no `console`.


// Essa lógica até funciona porém, se o número de meia entrada for maior que o de inteira, o valor pode sair errado.

//   let numIngresso = parseInt(prompt("Quantos ingressos são??"));
//   let meiaEntrada = parseInt(prompt("Quantos são meia-entrada?"));
//   let inteira = 30; 
//   let valorMeia = 15 * meiaEntrada;
  
//   let valorFinal = numIngresso * inteira - valorMeia; 
    
//   if (valorFinal > 100) {
//     let desconto = valorFinal - (valorFinal * 0.05) ;
//     alert(`O valor final com o desconto de 5% é: ${desconto}`);
//   }
//   else{
//     alert(`O valor final sem o desconto é: ${valorFinal}`);
//   }

  
let numIngresso = parseInt(prompt("Quantos ingressos são?")); // 2
let meiaEntrada = parseInt(prompt("Quantos são meia-entrada?")); // 1

//Aqui eu calculei o valor da inteira fazendo a subtração do numero de ingresso menos a meia entrada.
let inteira = numIngresso - meiaEntrada; // 2 - 1 = 1;

//Aqui eu fiz o valorFinal ser a inteira multiplicada por 30 + a meia entrada * por 15, depois eu fiz a soma do resultado da multiplicação.
let valorFinal = (inteira * 30) + (meiaEntrada * 15); // 1 * 30 = 30 // 1 * 15 = 15 // 30 + 15 = 45;

if (valorFinal > 100) {
    let desconto = valorFinal - (valorFinal * 0.05);
    console.log(`Valor com desconto: R$ ${desconto}`);
} else {
    console.log(`Valor sem desconto: R$ ${valorFinal}`);
}
  