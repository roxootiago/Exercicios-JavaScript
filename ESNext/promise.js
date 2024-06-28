const { toLower } = require("lodash");
let letraMinuscula = (e) => toLower(e);

let p = new Promise((res) => {
  res(["Ana", "Bia", "Carlos", "Daniel"]);
})
  .then((users) => users[2])
  .then(letraMinuscula)
  .then(console.log);

let promise = new Promise((promessa) => {
  promessa({
    x: 2,
    y: 3,
  });
});



promise.then((valor) => {
  console.log(valor);
  console.log(valor.x, valor.y);
});
