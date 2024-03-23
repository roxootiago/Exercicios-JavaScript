
let vetor = [17, 22, 14, 10, 19, 25, 12, 8, 21, 16];
function maiorMenor(vetor) {
  let maior = vetor[0];
  let menor = vetor[0];

  for (i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) {
      maior = vetor[i];
    } else if (vetor[i] < menor) {
      menor = vetor[i];
    }
  }
  return [maior, menor];
}

console.log(`Maior: ${maiorMenor(vetor)[0]}
Menor: ${maiorMenor(vetor)[1]}`);
