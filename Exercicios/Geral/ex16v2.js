let anoBissexto = (ano) => {
  return new Date(ano, 1, 29).getDate() === 29 /* verifica se o mês tem 29 dias */
    ? `${ano} é bissexto`
    : `${ano} não é bissexto`;
};

console.log(anoBissexto(2004));
console.log(anoBissexto(2020));
console.log(anoBissexto(2016));
console.log(anoBissexto(2025));
console.log(anoBissexto(2022));
