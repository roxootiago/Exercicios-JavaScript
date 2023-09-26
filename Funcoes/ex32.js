let vetor = [1, 2, 3, 4, 5,6,7,8,9];

function mediaVetor(vetor) {
  let soma = 0;
  for (i = 0; i < vetor.length; i++) {
    soma += vetor[i];
  }

  let media = soma / vetor.length;

  return media;
}

console.log(mediaVetor(vetor));
