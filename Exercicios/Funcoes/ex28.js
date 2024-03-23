let vetor = [37, 84, 12, 59, 26, 93, 18, 65, 41, 77];

function lerVetor(vetor) {
  let countPar = 0;
  let countImpar = 0;
  for (var i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
      countPar++;
    } else {
      countImpar++;
    }
  }
  return [countPar, countImpar];
}

console.log(`${lerVetor(vetor)[0]} são par e ${lerVetor(vetor)[1]} são ímpar`);
