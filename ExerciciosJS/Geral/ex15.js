let NumeroEIndicePares = (arrayNumeros) => {
  let novoArrayNumeros = new Array();
  arrayNumeros.forEach((e, ind) => {
    if (ind % 2 == 0) {
      if (e % 2 == 0) {
        novoArrayNumeros.push(e);
      }
    }
  });
  return novoArrayNumeros;
};

console.log(NumeroEIndicePares([1, 2, 3, 4]));
console.log(NumeroEIndicePares([10, 70, 22, 43]));
