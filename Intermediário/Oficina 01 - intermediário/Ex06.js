// Escreva uma função que receba um array de números e retorne o maior número presente no array.

function maiorNumero(array) {
  return Math.max(...array);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maior = maiorNumero(numeros);
console.log("O maior número presente no array é:", maior);
