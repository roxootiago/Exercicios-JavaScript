function notas(idAluno, nota1, nota2, nota3) {
  let media = 0;
  if (nota1 > nota2 && nota1 > nota3) {
    let media = (nota1 * 4 + nota2 * 3 + nota3 * 3) / 10;
    return `ID do Aluno: ${idAluno}
Media: ${media.toFixed(2)}
Situação: ${media > 5 ? "APROVADO" : "REPROVADO"}`;
  } else if (nota2 > nota1 && nota2 > nota3) {
    let media = (nota1 * 3 + nota2 * 4 + nota3 * 3) / 10;
    return `ID do Aluno: ${idAluno}
Media: ${media.toFixed(2)}
Situação: ${media > 5 ? "APROVADO" : "REPROVADO"}`;
  } else {
    let media = (nota1 * 3 + nota2 * 3 + nota3 * 4) / 10;
    return `ID do Aluno: ${idAluno}
Media: ${media.toFixed(2)}
Situação: ${media > 5 ? "APROVADO" : "REPROVADO"}`;
  }
}
//note que esse código teve repetições desnecessárias, tentarei melhorar isso

console.log(notas(123, 2.8, 6, 3.5));
console.log(notas(124, 7.4, 6, 6.5));
