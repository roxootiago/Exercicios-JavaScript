function gerarNumerosEntre(min, max, time) {
  if (min > max) [max, min] = [min, max];

  return new Promise((res) => {
    setTimeout(() => {
      const fator = max - min + 1;
      const aleatorio = parseInt(Math.random() * fator) + min;
      res(aleatorio);
    }, time);
  });
}

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000),
    gerarNumerosEntre(1, 60, 100),
    gerarNumerosEntre(1, 60, 15000),
  ]);
}

console.time("promise");

gerarVariosNumeros()
  .then(console.log)
  .then(() => {
    console.timeEnd("promise");
  });
