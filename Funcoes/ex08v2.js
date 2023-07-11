const pontuacao = "30, 40, 20, 4, 51, 25, 42, 38, 56, 2";

const tabela = function () {
  let arrayPontuacao = pontuacao.split(", "); // vai transformar em um array
  let quebraDeRecordes = 0;
  let maiorPontuacao = arrayPontuacao[0];
  let menorPontuacao = arrayPontuacao[0];

  for (let i = 1; i < arrayPontuacao.length; i++) {
    if (arrayPontuacao[i] > maiorPontuacao) {
      maiorPontuacao = arrayPontuacao[i];
      quebraDeRecordes++;
    } else if (arrayPontuacao[i] < menorPontuacao) {
      menorPontuacao = arrayPontuacao[i];
    }
  }
 return [
   parseInt(quebraDeRecordes),
   parseInt(maiorPontuacao),
   parseInt(menorPontuacao),
 ];
};

const tabelaPontos = tabela();
console.log(`Quebra de recordes: ${tabelaPontos[0]}
Maior pontuação: ${tabelaPontos[1]}
Menor pontuação: ${tabelaPontos[2]}`)
