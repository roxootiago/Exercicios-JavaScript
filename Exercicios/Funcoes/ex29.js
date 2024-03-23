let vetor = [14, 8, 18, 11, 23, 16, 7, 20, 13, 9];

function contadorIntervalo(vetor) {
  let count1 = 0;
  let count2 = 0;
  for (var i = 0; i < vetor.length; i++) {
    if (vetor[i] <= 20 && vetor[i] >= 10) {
      count1++;
    } else {
      count2++;
    }
  }
  return `Dentro do intervalo 10-20: ${count1}
Fora do intervalo: ${count2}`;
}

console.log(contadorIntervalo(vetor));
