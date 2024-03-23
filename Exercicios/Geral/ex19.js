let mediaSimples = (arrayNumeros) => {
  return (
    arrayNumeros.reduce(
      (acumulator, numeroTotal) => acumulator + numeroTotal,
      0
    ) / arrayNumeros.length
  );
};

console.log(mediaSimples([0, 10]));
console.log(mediaSimples([1, 2, 3, 4, 5]));
