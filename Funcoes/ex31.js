let vetor = [-8, 15, -10, 23, -6, 17, -12, 9, -20, 14];

function percorrerVetor(vetor) {
  let countPositivos = 0;
  let countNegativos = 0;

  for (i = 0; i < vetor.length; i++) {
    if (vetor[i] > 0) {
      countPositivos++;
    } else if (vetor[i] < 0) {
      countNegativos++;
    }
  }
  return [countPositivos, countNegativos];
}

console.log(`Positivos: ${percorrerVetor(vetor)[0]}
Negativos: ${percorrerVetor(vetor)[1]}`);
