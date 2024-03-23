const pessoa = {
  nome: "Anna",
  idade: 25,
  endereco: {
    logradouro: "Rua ABC",
    numero: 1000,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const desenvolvedor = {
  nome: "Tiago",
  idade: 20,
  areaDeAtuacao: {
    area: "Front-End",
  },
};

const { nome: n, idade: i } = desenvolvedor;
console.log(n, i);

const { sobrenome = null, escolaridade = "cursando" } = desenvolvedor;
console.log(sobrenome, escolaridade);

const {areaDeAtuacao: {area}} = desenvolvedor
console.log(area)
