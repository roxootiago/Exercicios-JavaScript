/* Armazenando função em variável */

const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

/* Armazenando uma função arrow em variável */

const soma = (a, b) => {
  return a + b;
};

console.log(soma(2, 3));

/* retorno implícito */

const multiplicacao = (a, b) => a * b;

console.log(multiplicacao(2, 3));

const imprimir2 = (a) => console.log(a, cliente);

const cliente = "TIAGO ROXO";

imprimir2("SEJA BEM VINDO", cliente);
