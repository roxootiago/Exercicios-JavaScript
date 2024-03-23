function getPreco(impostos = 0, moeda = "R$") {
  return `${moeda} ${(this.preco * (1 - this.desc) * (1 - impostos)).toFixed(
    2
  )}`;
}

const produto = {
  nome: "Notebook",
  preco: 5600,
  desc: 0.3,
  getPreco
};

console.log(produto.getPreco());
console.log(getPreco.call(produto));
console.log(getPreco.apply(produto));

console.log(getPreco.call(produto, 0.8082, "€"));
console.log(getPreco.apply(produto, [0.4, "€"]));
