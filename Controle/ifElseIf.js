Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimirNota = function (nota) {
  if (nota.entre(8.5, 10)) {
    console.log("Excelente!");
  } else if (nota.entre(6.5, 8.4)) {
    console.log("Ótimo!");
  } else if (nota.entre(4.5, 6.4)) {
    console.log("Bom");
  } else if (nota.entre(2.5, 4.4)) {
    console.log("Ainda não suficiente");
  } else if (nota.entre(0, 2.4)) {
    console.log("Insuficiente");
  } else {
    console.log("Nota inválida");
  }
};

imprimirNota(8.7);
imprimirNota(11);
imprimirNota(3.7);
