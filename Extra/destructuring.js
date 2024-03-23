let idade;

const pessoa = {
  name: "Elton",
  age: 26,
};

const { name } = pessoa;
({ age: idade } = pessoa);
console.log(name);
console.log(idade);
