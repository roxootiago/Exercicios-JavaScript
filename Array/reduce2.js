const alunos = [
  { nome: "João", nota: 7.3, bolsista: true },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: true },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

// Todos os alunos são bolsistas?
// console.log(alunos.map((a) => a.bolsista));
const resultado = alunos
  .map((a) => a.bolsista)
  .reduce((acumulator, total) => {
    return total && acumulator;
  });

// Alguns alunos são bolsistas?
const resultado2 = alunos
  .map((a) => a.bolsista)
  .reduce((acumulator, total) => {
    return total || acumulator;
  });

let resultadoFinal = resultado
  ? `todos os alunos são bolsistas`
  : `existem alunos não bolsistas`;
let resultadoFinal2 = resultado2
  ? `alguns alunos são bolsistas`
  : `não existem alunos bolsistas`;
console.log(resultadoFinal);
console.log(resultadoFinal2);
