const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

const arrayCarrinho = [];


const objeto = carrinho.map((e) => {
    arrayCarrinho.push(JSON.parse(e))
})

const resultado = arrayCarrinho.map(
  (e) => `R$${parseFloat(e.preco).toFixed(2).replace(".", ",")}`
);
console.log(arrayCarrinho);
console.log(resultado);
