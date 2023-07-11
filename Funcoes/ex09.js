const notas = function (nota) {
  if (nota < 39) {
    console.log(`Reprovado! 
O aluno não atingiu a média. Nota: ${nota.toFixed(2)}`);
  } else if (nota >= 39) {
    if (nota - Math.ceil(nota / 5) * 5 < 3) {
      // transforma em número decimal e arredonda, depois mutiplica por 5
      let notaArrendondada = Math.ceil(nota / 5) * 5;
      console.log(`Aprovado!
O aluno atingiu a média. Nota: ${notaArrendondada.toFixed(2)}`);
    }
  }
};

notas(38);
notas(39);
notas(43);
notas(29);
