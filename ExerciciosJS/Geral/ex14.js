let ObjetoParaArray = (objeto) => {
  return Object.entries(objeto);
};

console.log(ObjetoParaArray({
    nome: "Tiago",
    profissao: "desenvolvedor",
    idade: 20
}))
