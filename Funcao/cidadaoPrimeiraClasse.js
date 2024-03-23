// Função em JS  é First-Class Object (Citizens)
// High-order function

// criando de forma literal
function fun1() {}

// armazenar em uma variável
const fun2 = function () {};

// armazenar em um array
const array = [
  function (a, b) {
    return a + b;
  },
  fun1,
  fun2,
];
console.log(array[0](2, 3));

// armazenando em um atributo de objeto
const obj = {};
obj.falar = function () {
  return "olá mundo";
};
console.log(obj.falar());

// função como um parâmetro
function run(fun) {
  fun();
}

run(function () {
  console.log("Executando...");
});

// função retornando/contendo outra função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

soma(4, 5)(6);
const cincoMais = soma(2, 3);
cincoMais(4);
