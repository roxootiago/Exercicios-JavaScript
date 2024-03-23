const despesasTotais = (arrayDespesas) => {
  let despesas = (precoUnid) => precoUnid.preco;

  return `R$${arrayDespesas
    .map(despesas)
    .reduce((acumulator, actualNumber) => acumulator + actualNumber)}`;
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
