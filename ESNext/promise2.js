const esperarPor = (tempo = 3000) => {
  return new Promise((res) => {
    setTimeout(() => { /* opção colocar settimeout */
      console.log("Executando promise . . .");
      res();
    }, tempo);
  });
};

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor);
