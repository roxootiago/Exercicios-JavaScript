const pontos = [];

const recorde = function () {
  let qtdQuebraDeRecords = 0;
  let piorJogo = 1;
  let maiorPontuacao = pontos[0];
  let menorPontuacao = pontos[0];

  for (let i = 1; i <= pontos.length; i++) {
    if (pontos[i] > maiorPontuacao) {
      maiorPontuacao = pontos[i];
      qtdQuebraDeRecords++;
    } else if (pontos[i] < menorPontuacao) {
      menorPontuacao = pontos[i];
      piorJogo = i + 1;
    }
  }

  return [qtdQuebraDeRecords, maiorPontuacao, menorPontuacao, piorJogo];
};

const getPontos = function (pontuacao) {
  pontos.push(pontuacao);

  return recorde(pontos);
};
getPontos(30);
getPontos(40);
getPontos(20);
getPontos(4);
getPontos(51);
getPontos(25);
getPontos(42);
getPontos(2);
getPontos(38);
getPontos(56);

const resultado = getPontos();
const qntdRecords = resultado[0];
const maiorPontuacao = resultado[1];
const menorPontuacao = resultado[2];
const piorJogo = resultado[3];

console.log(`Quebra de recordes: ${qntdRecords}
Maior pontuação: ${maiorPontuacao}
Menor pontuação: ${menorPontuacao}
Pior partida: ${piorJogo}ª`);
