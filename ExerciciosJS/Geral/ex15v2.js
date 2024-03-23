let NumeroEIndicePares = (arrayNumeros) => {
  return arrayNumeros.filter((e, ind) => {
    return e % 2 == 0 && ind % 2 == 0
  });
};

console.log(NumeroEIndicePares([1, 2, 3, 4]));
console.log(NumeroEIndicePares([10, 70, 22, 43]));
