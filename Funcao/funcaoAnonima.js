const soma = function (x, y) {
  return x + y;
};

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b));
};

imprimirResultado(7, 3);
imprimirResultado(4, 6, soma);
imprimirResultado(2, 5, function (x, y) {
  return x * y;
});
imprimirResultado(12, 2, (x, y) => x - y);

const falar = {
  texto: function () {
    console.log("oi");
  },
};

falar.texto();
