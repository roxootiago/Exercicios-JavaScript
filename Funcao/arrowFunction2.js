function Pessoa(idade) {
  this.idade = idade;

  setInterval(() => {
    this.idade++;
    console.log(`Segundos: ${this.idade - 1}`);
  }, 1000);
}

new Pessoa(20); /* a palavra "new" serve para criar um novo objeto */

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

const dataAtual = new Date();

function dataAtualFormatada() {
  console.log(
    `${dataAtual.getDate()}/${
      dataAtual.getMonth() + 1
    }/${dataAtual.getFullYear()}`
  );
}
dataAtualFormatada();
