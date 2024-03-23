function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
console.log(soma("a","b","c"))

/* o objeto arguments é uma forma de acessar todos os parâmetros passados para uma função em JavaScript, mesmo que eles não tenham sido declarados na definição da função. Ele é uma espécie de array que contém todos os parâmetros, permitindo que você os acesse e utilize dentro da função. */