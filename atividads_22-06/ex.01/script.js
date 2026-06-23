function calc(op) {
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado").innerText = "Digite dois números válidos";
    }

    switch (op) {
        case "+":
            resultado = num1 + num2;
            break;

        case "-":
            resultado = num1 - num2;
            break;

        case "*":
            resultado = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                resultado = "Divisão por zero!";
            } else {
                resultado = num1 / num2;
            }
            break;
        default:
            resultado = "Operação Inválida";
    }

    // else if (op === '+') {
    //     resultado = num1 + num2;
    // }
    // else if (op === '-') {
    //     resultado = num1 - num2;
    // }
    // else if (op === '*') {
    //     resultado = num1 * num2;
    // }
    // else if (op === '/') {
    //     if (num2 === 0) {
    //         resultado = "Divisão por zero!";
    //     } else {
    //         resultado = num1 / num2;
    //     }
    // }

    document.getElementById("resultado").innerText = resultado;
}