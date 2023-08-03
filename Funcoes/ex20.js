function notas(troco) {
  let nota100, nota50, nota10, nota5, nota1;
  if (troco / 100 >= 1) {
    nota100 = parseInt(troco / 100);
  }
  if ((troco % 100) / 50 >= 1) {
    nota50 = parseInt((troco % 100) / 50);
  }
  if ((troco % 50) / 10 >= 1) {
    nota10 = parseInt((troco % 50) / 10);
  }
  if ((troco % 10) / 5 >= 1) {
    nota5 = parseInt((troco % 10) / 5);
  }
  if (troco % 5 >= 1) {
    nota1 = (troco % 5) / 1;
  }
  console.log(resultado(nota100, nota50, nota10, nota5, nota1));
}

function resultado(nota100, nota50, nota10, nota5, nota1) {
  let quantNotas = "";

  if (nota100 > 0) {
    quantNotas += `${nota100} nota(s) de 100, `;
  }
  if (nota50 > 0) {
    quantNotas += `${nota50} nota(s) de 50, `;
  }
  if (nota10 > 0) {
    quantNotas += `${nota10} nota(s) de 10, `;
  }
  if (nota5 > 0) {
    quantNotas += `${nota5} nota(s) de 5, `;
  }
  if (nota1 > 0) {
    quantNotas += `${nota1} nota(s) de 1 `;
  }
  return quantNotas;
}

notas(18);
notas(100);
notas(153);
notas(18);
notas(270);
