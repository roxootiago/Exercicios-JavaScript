let vetorNotas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8];

function calcularMedia(vetor) {
  let conceito = [];
  vetor.forEach((element) => {
    if (element >= 9 && element <= 10) {
      conceito.push(`A`);
    } else if (element < 9 && element >= 7) {
      conceito.push(`B`);
    } else if (element < 7 && element >= 5) {
      conceito.push(`C`);
    } else if (element < 5 && element >= 0) {
      conceito.push(`D`);
    } else {
      conceito.push(`Nota inválida`);
    }
  });
  return conceito;
}

console.log(calcularMedia(vetorNotas));
