const pessoa1 = {
  nome: "Tiago",
  sobrenome: "Rôxo",
  nomeCompleto: function () {
    return `Nome: ${this.nome} ${this.sobrenome}`;
  },
};

console.log(pessoa1.nomeCompleto());

//Utilizando call
const pessoa2 = {
  informacoes: function (cidade, pais) {
    return `Nome: ${this.nome} ${this.sobrenome}
Cidade: ${cidade}
País: ${pais}`;
  },
};

const criarPessoa1 = {
  nome: "Barry",
  sobrenome: "Allen",
};

console.log("\nCRIANDO UTILIZANDO METODO CALL");
console.log(pessoa2.informacoes.call(criarPessoa1, "Central City", "EUA"));

//Utilizando Apply
const pessoa3 = {
  informacoes: function (cidade, pais) {
    return `Nome: ${this.nome} ${this.sobrenome}
Cidade: ${cidade}
País: ${pais}`;
  },
};

const criarPessoa2 = {
  nome: "Bruce",
  sobrenome: "Wayne",
};

console.log("\nCRIANDO UTILIZANDO METODO APPLY");
console.log(pessoa3.informacoes.apply(criarPessoa2, ["Gotham City", "EUA"]));
