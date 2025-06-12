// Escreva uma função que recebe um número e retorna se ele é par ou ímpar.

const parOuImpar = (num) => {
  if (num % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
};

const numero = 10;
const resultado = parOuImpar(numero);
console.log("O número", numero, "é", resultado);
