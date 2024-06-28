function gerarNumerosEntre(min, max, numerosProibidos) {
  if (min > max) [max, min] = [min, max];
  return new Promise((res, rej) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numerosProibidos.includes(aleatorio)) {
      rej(`O número ${aleatorio} foi repetido`);
    } else {
      res(aleatorio);
    }
  });
}

async function gerarMega(qtdNumeros, tentativas = 1) {
  try {
    const numeros = [];

    for (let _ of Array(qtdNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    return numeros;
  } catch (err) {
    if (tentativas > 100) {
      throw `Error: ${err.message}`;
    } else {
      return gerarMega(qtdNumeros, tentativas + 1);
    }
  }
}

gerarMega(25).then(console.log).catch(console.log);
