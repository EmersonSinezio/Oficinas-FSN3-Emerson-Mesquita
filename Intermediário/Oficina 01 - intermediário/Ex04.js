// 4. Calcule a área de um círculo baseada na passagem de parâmetro de seu raio.

function calcularAreaCirculo(raio) {
  const pi = 3.14;
  const area = pi * raio * raio;
  return area;
}

const raio = 5;
const areaCirculo = calcularAreaCirculo(raio);
console.log("A área do círculo de raio", raio, "é:", areaCirculo);
