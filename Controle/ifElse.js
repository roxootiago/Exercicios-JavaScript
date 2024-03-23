const imprimirResultado = function (nota) {
  if (typeof nota === "number") {
    /* compara se "nota" é numero */ if (nota >= 7) {
      console.log("Aprovado");
    } else {
      console.log("Reprovado");
    }
  } else {
    console.log("São aceito apenas números");
  }
};

imprimirResultado(8);
imprimirResultado(5);
imprimirResultado("oii");
imprimirResultado(true);
