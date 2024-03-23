let segundoMaior = (arrayNumeros) => {
  let maior = Math.max(...arrayNumeros);

  return Math.max(...arrayNumeros.filter((e) => e !== maior));
};

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8,4,5,6]));
