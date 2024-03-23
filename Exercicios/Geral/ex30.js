let receberMelhorEstudante = (arrayEstudantes) => {
  let arrayNotas = [];
  let arrayNome = [];
  let media = [];
  const soma = (array) =>
    array.reduce((acumulator, atual) => acumulator + atual, 0);

  Object.entries(arrayEstudantes).forEach((e) => {
    arrayNome.push(e[0]);
    arrayNotas.push(e[1]);
  });

  arrayNotas.forEach((e) => {
    media.push((soma(e) / e.length).toFixed(2));
  });

  let indiceMaior = Math.max(...media);
  let index = media.findIndex(
    (i) => i == indiceMaior
  ); /* função para achar id */

  return {
    nome: arrayNome[index],
    media: indiceMaior,
  };
};

console.log(
  receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
  })
);


