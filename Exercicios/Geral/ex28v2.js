let filtrarPorQuantidadeDeDigitos = (arrayNumeros, digitos) => {
  return arrayNumeros.filter((e) => String(e).length == digitos);
};

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 362, 10, 125, 11], 2));

console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));
