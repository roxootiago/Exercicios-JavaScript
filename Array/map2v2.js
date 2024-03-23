const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

let toObjeto = (json) => JSON.parse(json);
let preco = (produto) => produto.preco;

const result = carrinho
  .map(toObjeto)
  .map(preco);
console.log(result);
