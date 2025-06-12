// Crie uma função que recebe uma string e retorna essa string invertida.

const inverterString = (string) => {
  return string.split("").reverse().join("");
};

console.log(inverterString("Ola Mundo"));
console.log(inverterString("Onibus"));
