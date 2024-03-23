const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0, 7.0];

let i;
// sem callback
const notasBaixas = [];
for ( i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}

console.log("SEM CALLBACK");
console.log(notasBaixas);

// com callback

const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});

console.log("UTILIZANDO CALLBACK")
console.log(notasBaixas2);


// com arrow function 
console.log("UTILIZANDO ARROW FUNCTION");
const notasBaixas3 = notas.filter(nota =>  nota < 7)
console.log(notasBaixas3)