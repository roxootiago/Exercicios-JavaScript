const jurosSimples = function (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
  let juros = capitalInicial * taxaDeJuros * tempoDeAplicacao;
  return capitalInicial + juros;
};

const jurosComposto = function (capitalInicial, taxaJuros, tempoAplicacao) {
  let meses = tempoAplicacao / 12;
  let juros = capitalInicial * (1 + taxaJuros) ** meses;
  return juros.toFixed(2);
};

console.log(jurosSimples(1200, 14, 0.02));
console.log(jurosComposto(1000, 0.05, 24));
