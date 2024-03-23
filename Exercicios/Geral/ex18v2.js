let despesasTotais = (arrayDespesas) => {
  return `R$${arrayDespesas.reduce(
    (acumulador, precoAtual) => acumulador + precoAtual.preco,
    0
  )}`;
};

console.log(
  despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
  ])
);

console.log(
  despesasTotais([
    { nome: "Galaxy S23", categoria: "Eletrônicos", preco: 3599.99 },
    { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.99 },
  ])
);
