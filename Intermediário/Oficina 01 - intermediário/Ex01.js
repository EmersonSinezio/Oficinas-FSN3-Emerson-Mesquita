// Crie uma função que recebe dois números e retorne o maior dos dois.

function maiorNumero(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const num1 = 10;
const num2 = 5;
const maior = maiorNumero(num1, num2);
console.log("O maior número entre (", num1, "e", num2, ") é:", maior);
