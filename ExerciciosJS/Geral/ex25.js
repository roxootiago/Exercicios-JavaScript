let buscarPalavrasSemelhantes = (palavra, arrayPalavras) => {
  return arrayPalavras.filter((palavraChave) => palavraChave.includes(palavra));
};

console.log(
  buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
);

console.log(buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]));
