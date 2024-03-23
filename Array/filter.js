const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.49, fragil: false },
];

console.log(produtos.filter((p) => false));

let precoMaior500 = (produto) => produto.preco > 500;
let fragil = (produtoFragil) => produtoFragil.fragil;

let resultado = produtos.filter(precoMaior500).filter(fragil);
console.log(resultado);
