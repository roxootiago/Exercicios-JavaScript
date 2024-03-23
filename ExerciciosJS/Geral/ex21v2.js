let menorNumero = (arrayNumeros) => {
  return arrayNumeros.reduce((anterior, atual) =>
    anterior < atual ? anterior : atual
  );
};

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));

let menorNumero2 = (arrayNumeros2) => {
  return Math.min(... arrayNumeros2)
};

console.log(menorNumero2([10, 5, 35, 65]));
console.log(menorNumero2([5, -15, 50, 3]));
