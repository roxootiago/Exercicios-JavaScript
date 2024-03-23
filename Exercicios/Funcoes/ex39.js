let vetor1 = [1, 2, 3, 4];
let vetor2 = [5, 6, 7, 8];

function inverteVetor(vetor1, vetor2) {
  for (i = 0; i < vetor1.length; i++) {
    // [vetor1[i], vetor2[i]] = [vetor2[i], vetor1[i]];
    vetor1.splice(i, 1, vetor2.splice(i, 1, vetor1[i]));
  }

  console.log(`Array A: ${vetor1}
Array B: ${vetor2}`);
}

inverteVetor(vetor1, vetor2);
