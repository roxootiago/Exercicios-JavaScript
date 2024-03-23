let menorNumero = (arrayNumeros) => {
  let menorNumeroAtual = arrayNumeros[0];
  arrayNumeros.forEach((e) => {
    if (e < menorNumeroAtual) {
      menorNumeroAtual = e;
      e = menorNumeroAtual;
    }
  });

  return menorNumeroAtual;
};

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));
