function produto(nome, preco) {
  return {
    nome,//tambem poderia colocar nome:nome
    preco,
    desconto: 0.4,
  };
}

console.log(produto("Xiaomi S11", 1090));

const celular = produto("Galaxy S23", 2300);

console.log(celular);
console.log(
  `Nome do produto: ${celular.nome}\nPreço: R$${
    celular.preco
  }\nPreço final: R$${celular.preco * celular.desconto}`
);
