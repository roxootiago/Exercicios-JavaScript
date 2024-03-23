function pessoa(nome) {
  nome;

  this.falar = function () {
    console.log(`Meu nome é ${nome}`);
  };
}

const p1 = new pessoa("Tiago");
p1.falar();

class criarPessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p2 = new criarPessoa("Luiz");
p2.falar();
