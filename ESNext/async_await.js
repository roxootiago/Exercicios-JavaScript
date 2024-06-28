const esperarPor = (tempo = 3000) => {
  return new Promise((res) => {
    setTimeout(() => res(), tempo);
  });
};

const retornarValor = () => {
  return new Promise((res) => {
    setTimeout(() => res(10), 5000);
  });
};

const executar = async () => {
  let valor = await retornarValor();

  await esperarPor(1500);
  console.log(`Async/Await: ${valor}`);

  await esperarPor(1500);
  console.log(`Async/Await: ${valor + 1}`);

  await esperarPor(1500);
  console.log(`Async/Await: ${valor + 2}`);

  return `Async/Await: ${valor + 3}`;
};

const executarDeVerdade = async () => {
  const valor = await executar();
  console.log(valor);
};

// executar().then(console.log);
executarDeVerdade();
