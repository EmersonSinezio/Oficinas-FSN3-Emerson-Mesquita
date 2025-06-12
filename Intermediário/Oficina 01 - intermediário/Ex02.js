// 2. Crie uma função de calcule a potência do primeiro número elevado ao segundo número.

function potencia(base, expoente) {
  return base ** expoente;
}

const base = 2;
const expoente = 3;
const resultado = potencia(base, expoente);
console.log(base, "elevado a", expoente, "é igual a", resultado);
