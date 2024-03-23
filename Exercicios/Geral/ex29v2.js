let segundoMaior = (arrayNumeros) => {
  let ordemDecrescente = arrayNumeros.sort(
    (a, b) => b - a
  ); /* ordenando o array de forma decrescente */
  return ordemDecrescente[1];
};

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));
