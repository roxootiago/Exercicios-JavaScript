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

Array.prototype.flatMap = function (callback) {
  return Array.prototype.concat.apply([], this.map(callback));
};

const getNotaAluno = (aluno) => aluno.nota;
const getNotaTurma = (turma) => turma.alunos.map(getNotaAluno);
const notas = escola.flatMap(getNotaTurma);
console.log(notas);
