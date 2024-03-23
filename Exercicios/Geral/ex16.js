let anoBissexto = (ano) => {
  if ((ano % 4 == 0 && !(ano % 100 == 0)) || ano % 400 == 0) {
    return `${ano} é bissexto`;
  } else {
    return `${ano} não é bissexto`;
  }
};

console.log(anoBissexto(2004));
console.log(anoBissexto(2020));
console.log(anoBissexto(2016));
console.log(anoBissexto(2025));
console.log(anoBissexto(2022));
