const transformandoDinheiro = function (valor) {
  let valorFormatado = valor.toFixed(2);
  let valorFormatado2 = valorFormatado.replace(".", ",");
  console.log(`R$${valorFormatado2}`);
};

transformandoDinheiro(0.30000000000000004);
transformandoDinheiro(0.839338129282);
transformandoDinheiro(3.403923);
transformandoDinheiro(10239.909878);
