/* Funcao sem retorno */

console.log("Função sem retorno \n");
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 8, 5, 6, 7);
imprimirSoma();

/* Funcao com retorno */

console.log("Função com retorno \n");
function soma(a, b = 0) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
