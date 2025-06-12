// Crie uma função que gere os primeiros n números da sequência de Fibonacci.

const gerarFibonacci = (n) => {
  const sequencia = [0, 1];
  for (let i = 2; i < n; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
  }
  return sequencia;
};

const sequenciaFibonacci = gerarFibonacci(10);
console.log("Sequência de Fibonacci:", sequenciaFibonacci);
