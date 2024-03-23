Array.prototype.filter2 = function (callback) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástico", preco: 18.49, fragil: false },
];

let precoMaior500 = (produto) => produto.preco > 500;
let fragil = (produtoFragil) => produtoFragil.fragil;

let resultado = produtos.filter2(precoMaior500).filter2(fragil);
console.log(resultado);
