function verificarPalavra(palavra1, palavra2) {
  let palavraUpper1 = palavra1.toUpperCase();
  let palavraUpper2 = palavra2.toUpperCase();
  let resultado = true;
  for (i = 0; i < palavra1.length; i++) {
    if (
      palavraUpper1.includes(palavraUpper1[i]) &&
      palavraUpper2.includes(palavraUpper1[i])
    ) {
      resultado = true;
    } else {
      resultado = false;
    }
  }
  return resultado;
}

console.log(verificarPalavra("abcdf", "dcba"));
console.log(verificarPalavra("abcdf", "dcbaf"));
