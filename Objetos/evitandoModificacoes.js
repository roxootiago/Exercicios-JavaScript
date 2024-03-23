// Object.preventExtensions
// não consegue adicionar mais atributos, apenas editar e excluir

const produto = Object.preventExtensions({
  nome: "Qualquer",
  preco: 1.99,
  tag: "promocao",
});

console.log(`Extensível: ${Object.isExtensible(produto)}`);
produto.nome = "Borracha";
produto.descricao = "Borracha escolar";
console.log(produto);

delete produto.tag;
console.log(produto);

//Object.seal
//não consegue adicionar ou excluir, apenas editar
const pessoas = {
  nome: "Juliana",
  idade: 36,
};
Object.seal(pessoas);

console.log(`Selado: ${Object.isSealed(pessoas)}`);
pessoas.sobrenome = "Oliveira";
pessoas.idade = 35;
console.log(pessoas);

//Object.freeze
//bloqueia quaisquer alterações