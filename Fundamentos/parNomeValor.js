/* par nome/valor */
const saudacao = "Opa"; // contexto léxico 1

function exec() {
  const saudacao = "Falaaa"; /* contexto lexico */
  return saudacao;
}

const cliente = {
  nome: "Pedro",
  idade: 32,
  endereco: {
    logradouro: "Rua Javascript",
    numero: 123,
  },
  formacao: {
    curso: "Análise e Desenvolvimento de Sistemas",
  },
};

console.log(cliente);
console.log(cliente["formacao"]["curso"]);
console.log(exec());
console.log(saudacao);
