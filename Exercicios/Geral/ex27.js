let inverter = (objeto) => {
  let objetoResultante = {};
  

  Object.entries(objeto).forEach(([chave, valor]) => {
    objetoResultante[valor] = chave;
  });

  return objetoResultante;
};

console.log(inverter({ a: 1, b: 2, c: 3 }));
