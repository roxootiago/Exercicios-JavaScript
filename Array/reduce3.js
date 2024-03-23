const escola = [
  {
    nome: "Turma M1",
    alunos: [
      {
        nome: "Tiago",
        nota: 8.1,
      },
      {
        nome: "Luiza",
        nota: 9.3,
      },
    ],
  },
  {
    nome: "Turma M2",
    alunos: [
      {
        nome: "Ana",
        nota: 8.9,
      },
      {
        nome: "Rebeca",
        nota: 7.3,
      },
    ],
  },
];

const calcularMediaTurma = (turma) => {
  const notasAluno = turma.alunos.map((aluno) => aluno.nota);
  const notasTurma = (acumulator, total) => acumulator + total;
  const somaNotas = notasAluno.reduce(notasTurma);
  const media = somaNotas / notasTurma.length;
  return media;
};

escola.forEach((turma) => {
  const mediaTurma = calcularMediaTurma(turma);
  console.log(`Média da ${turma.nome}: ${mediaTurma}`);
});
