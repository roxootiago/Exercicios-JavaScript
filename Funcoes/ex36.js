const vetor = [7, 3, 9, 5, 1, 10, 4, 2, 8, 6];
const vetor2 = [4, 9, 1, 6, 3, 7, 2, 10, 8, 5];

function multiplicar(valor, vetor) {
  let vetorMult = [];

  vetor.forEach((e) => {
    vetorMult.push(valor * e);
  });
  return vetorMult;
}

function multiplicaPor5(valor, vetor) {
  let vetorMult = [];

  if (valor >= 5) {
    vetor.forEach((e) => {
      vetorMult.push(valor * e);
    });
    return vetorMult;
  } else {
    return ` O valor é menor que 5`;
  }
}

console.log(multiplicar(3, vetor))
console.log(multiplicaPor5(3, vetor2));
console.log(multiplicaPor5(5, vetor2));
