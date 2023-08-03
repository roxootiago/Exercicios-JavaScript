const fatorial = function (numero) {
  vet = 1;

  if (numero == 0) {
    console.log(1);
  } else {
    for (i = numero; i > 0; i--) {
      numero = i * vet;
      vet = numero;
    }
    console.log(numero);
  }
};

fatorial(0);
