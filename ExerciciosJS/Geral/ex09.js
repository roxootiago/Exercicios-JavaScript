const repeticao = (a, b) => {
  return Array(b).fill(a); /* Array(b) => cria um array com a quantidade de n | fill(a) preenche todas as colunas com o elemento */
};

console.log(repeticao(7, 3));
