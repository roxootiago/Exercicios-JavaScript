console.log(Math.ceil(6.1)); /* arredonda para cima */
console.log(Math.floor(6.1)); /* arredonda para baixo */

const obj1 = {};
obj1.nome = "peixe";
// obj1["nome"] = "bola";

console.log(obj1.nome);

function Obj(nome) {
  this.nome = nome;
}

const obj2 = new Obj("Cadeira gamer");
const obj3 = new Obj("Luz rgb");

console.log(obj2.nome);
console.log(obj3.nome);
