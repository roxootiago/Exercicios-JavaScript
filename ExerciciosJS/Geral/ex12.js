let objeto = {
  nome: "Tiago",
  idade: 20,
};

let novoObjeto = Object.assign({}, objeto); /* faz uma cópia do objeto */
novoObjeto.nome = "Lucas";

console.log(novoObjeto);
console.log(objeto);

delete novoObjeto.idade;
console.log(novoObjeto);

const removerPropriedade = (objeto, atributo) => {
  let chaves = Object.keys(objeto).filter((chave) => chave !== atributo);
  let novoObjeto = {};

  chaves.forEach((e) => {
    novoObjeto[e] = objeto[e];
  });

  return novoObjeto;
};

console.log(removerPropriedade({ a: 1, b: 2 }, "a"));

console.log(
  removerPropriedade(
    {
      id: 20,
      nome: "caneta",
      descricao: "Não preenchido",
    },
    "descricao"
  )
);

console.log(Object.is(removerPropriedade(objeto, "descricao"), objeto));
