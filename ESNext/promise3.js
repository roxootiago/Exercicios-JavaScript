function gerarNumerosEntre(min, max) {
  if (min > max) [max, min] = [min, max];
  return new Promise((res) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    res(aleatorio);
  });
}

const vezes10 = (num) => num * 10;
const resultado = (num) => `Número gerado: ${num}`;
gerarNumerosEntre(1, 20).then(vezes10).then(resultado).then(console.log);
