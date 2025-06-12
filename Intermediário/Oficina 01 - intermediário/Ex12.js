// Crie uma função que valide um CPF (formato brasileiro) de acordo com as regras oficiais.
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, "");

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  const calcularDigito = (bloco, pesos) => {
    let total = 0;
    for (let i = 0; i < pesos.length; i++) {
      total += parseInt(bloco.charAt(i)) * pesos[i];
    }
    const resto = total % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const pesosPrimeiroDigito = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  const pesosSegundoDigito = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];

  const primeiroDigito = calcularDigito(
    cpf.substring(0, 9),
    pesosPrimeiroDigito
  );
  const segundoDigito = calcularDigito(
    cpf.substring(0, 10),
    pesosSegundoDigito
  );

  return (
    parseInt(cpf.charAt(9)) === primeiroDigito &&
    parseInt(cpf.charAt(10)) === segundoDigito
  );
}

console.log(validarCPF("529.982.247-25"));
console.log(validarCPF("52998224725"));

console.log(validarCPF("111.111.111-11"));
console.log(validarCPF("123.456.789-00"));
console.log(validarCPF(""));
console.log(validarCPF("123"));
