// Crie uma função que receba dois números e um operador (+, -, *, /) e retorne o resultado da operação.

function calcular(num1, num2, operador) {
  switch (operador) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Operador inválido";
  }
}

const num1 = 10;
const num2 = 5;
const operador = "*";
const resultado = calcular(num1, num2, operador);
console.log("Resultado:", resultado);
