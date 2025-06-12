// Escreva uma função que conte quantas vogais existem em uma string fornecida.

const contarVogais = (str) => {
  const vogais = "aeiouAEIOU";
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      contador++;
    }
  }
  return contador;
};

console.log(contarVogais("Ola, tudo bem?"));

const contarConsoantes = (str) => {
  const consoantes = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ";
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (consoantes.includes(str[i])) {
      contador++;
    }
  }
  return contador;
};

console.log(contarConsoantes("Ola, tudo bem?"));
