let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];

function adicionarVetor(vetor1, vetor2) {
  for (i = 0; i < vetor2.length; i++) {
    vetor1.push(vetor2[i]);
  }

  return `Vetor adicionado: ${vetor2}
Vetor resultante: ${vetor1}`;
}

console.log(adicionarVetor(vetorPilha, vetorAdiciona));
