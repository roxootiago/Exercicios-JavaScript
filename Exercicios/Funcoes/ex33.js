let vetorNumero = [1, 2, 3, 4];
let vetorString = ["React", "Angular", "Vue", "Node"];
let vetorDouble = [2.3, 4.5, 6.7, 8.9];

function concatVetor(...args)/* independente a quantidade passada nos parâmetros */ {
  let resultado = [];

  for (i = 0; i < arguments.length; i++) {
    resultado = resultado.concat([iarguments]);
  }
  return resultado;
}

console.log(concatVetor(vetorNumero, vetorDouble, vetorString));
console.log(concatVetor(vetorNumero, vetorString));
