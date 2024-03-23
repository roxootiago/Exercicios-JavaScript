/* o array resultante terá o mesmo tamanho do array original */

const nums = [1, 2, 3, 4, 5];
/* map => for com um propósito */

let resultado = nums.map((e) => e * 2);
console.log(resultado);

let soma10 = (e) => e + 10;
let triplo = (e) => e * 3;
let paraDinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
