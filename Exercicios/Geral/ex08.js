const multiplicacao = (a, b) => {
  let acumulator = 0;
  for (i = 1; i <= b; i++) {
    acumulator += a;
  }
  return acumulator;
};

console.log(multiplicacao(5, 5));
console.log(multiplicacao(0, 7));
