const somaDeNumeros = (arrayNumeros) => {
  let somador = 0;

  arrayNumeros.forEach((e) => {
    somador += e;
  });

  return somador;
};

console.log(somaDeNumeros([10, 10, 10]));
console.log(somaDeNumeros([15, 15, 15, 15]));
