const linguagem = "javascript";

console.log(
  linguagem.charAt(6)
); /* .charAt => localiza o carectere dentro da string ( contando a partir de 0) */

console.log(
  linguagem.charCodeAt(6)
); /* .charCodeAt => retorna seu code unicode */

console.log(
  linguagem.indexOf("p")
); /* .indexOf => busca caractere e retorna sua posição */

console.log(linguagem.substring(1));
console.log(
  linguagem.substring(0, 4)
); /*  .substring => retorna a string de acordo com os parâmetros passados */

console.log(
  "Linguagem: ".concat(linguagem).concat(";")
); /* .concat => concatena as strings */

console.log(
  "Tiago, Graziela, Leticia".split(",")
); /* .split => transforma em um array */
