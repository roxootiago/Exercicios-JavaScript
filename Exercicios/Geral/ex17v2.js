let somaDeNumeros = (arrayNumeros) => {
  return arrayNumeros.reduce(
    (acumulador, numeroAtual) => acumulador + numeroAtual
  );
};

console.log(somaDeNumeros([10, 10, 10]));
console.log(somaDeNumeros([15, 15, 15, 15]));
