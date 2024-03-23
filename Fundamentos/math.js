const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area.toFixed(2));

/* -----Método Math------- */

console.log(
  Math.round(-2.34)
); /* Math.round => arredonda para o número mais próximo */
console.log(Math.round(2.57));

console.log(Math.floor(0.89)); /* Math.floor => retorna numéro inteiro menor */
console.log(Math.floor(2.9));

console.log(
  Math.max(10, 200)
); /* Math.max(a,b) => retorna o maior valor entre os parâmetros */
console.log(
  Math.min(10, 200)
); /* Math.min(a,b) => retorna o menor valor entre os parâmetros */

console.log(Math.pow(8, 2)); /* Math.pow => retorna a base elevada a potência */

console.log(
  Math.random()
); /* Math.random => retorna número aleatório entre 0 e 1 */

console.log(
  Math.sqrt(9)
); /* Math.sqrt => retorna a raiz quadrada positiva de um número */

console.log(
  Math.trunc(43.23)
); /* Math.trunc => retorna a parte inteira do número */
