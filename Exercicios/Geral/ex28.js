let filtrarPorQuantidadeDeDigitos = (arrayNumeros, digitos) => {
  let arrayResultado = [];
  arrayNumeros.forEach((e) => {
    if (String(e).length == digitos) {
      arrayResultado.push(e);
    }
  })

  return arrayResultado;
};

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 362, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos([5,9,1,125,11],1));