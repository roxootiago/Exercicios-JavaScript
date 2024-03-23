const receberPrimeiroEUltimoElemento = (...params) => {
  const primeiroElemento = (e) => e[0];
  const ultimoElemento = (e) => e[e.length - 1]; /* acessando o último elemento de um array */
  return [primeiroElemento(params), ultimoElemento(params)];
};

console.log(receberPrimeiroEUltimoElemento(7, 14, "olá"));
console.log(receberPrimeiroEUltimoElemento(-100, "aplicativo", 16));
console.log(receberPrimeiroEUltimoElemento("texto", true, 16, 78.9));
