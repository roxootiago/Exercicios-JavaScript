const filtrarNuumero = (array) => {
  let typeNumber = (e) => typeof e === "number";

  return array.filter(item => typeNumber(item));
};

console.log(filtrarNuumero(["Javascript", 1, "3", "Web", 20]));
console.log(filtrarNuumero(["a", "c"]));
