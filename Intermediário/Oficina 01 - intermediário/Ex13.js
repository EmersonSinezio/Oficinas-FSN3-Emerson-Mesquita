// 13. Desenvolva uma função que implemente um cronômetro simples, contando segundos e exibindo o resultado no console.

function cronometro(segundos) {
  let contador = 0;
  const timer = setInterval(() => {
    console.log(contador);
    contador++;
    if (contador > segundos) {
      clearInterval(timer);
      console.log("cronometro finalizado");
    }
  }, 1000);
}

cronometro(5);
