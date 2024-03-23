let ObjetoParaArray = (objeto) => {
  const chaves = Object.keys(objeto);
  const resultado = chaves.map((chave) => [chave, objeto[chave]]);

  return resultado;
};

console.log(
  ObjetoParaArray({
    nome: "Tiago",
    profissao: "desenvolvedor",
    idade: 20,
  })
);
