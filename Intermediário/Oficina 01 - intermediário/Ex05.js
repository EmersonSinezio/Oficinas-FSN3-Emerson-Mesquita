// 5. Escreva uma função que receba um array de números e retorne apenas os números pares.

function numerosPares(array) {
  return array.filter((num) => num % 2 === 0);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numerosPares(numeros);
console.log("Números pares:", pares);
