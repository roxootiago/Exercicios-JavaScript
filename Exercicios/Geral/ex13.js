const filtrarNumero = (arrayNumeros) => {
  let arrayNovo = [];

  arrayNumeros.forEach((e) => {
    if (typeof e === "number") {
      arrayNovo.push(e);
    }
  });

  return arrayNovo;
};

console.log(filtrarNumero(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNumero(["a", "c"]));
