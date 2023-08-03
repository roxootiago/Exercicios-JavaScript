const anoBissexto = function (ano) {
  if (ano % 4 == 0) {
    console.log("é ano bissexto");
  } else {
    console.log("não é ano bissexto");
  }
};

anoBissexto(1988);
anoBissexto(2020);
anoBissexto(2024);
anoBissexto(2023);
