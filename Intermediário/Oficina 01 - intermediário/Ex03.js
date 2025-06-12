// 3. Calcule o fatorial de um número passado por uma função.

function calcularFatorial(numero) {
  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

const num = 5;
const fatorial = calcularFatorial(num);
console.log("O fatorial de", num, "é:", fatorial);
