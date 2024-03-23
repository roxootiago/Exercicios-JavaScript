function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto();
const obj2 = new MeuObjeto();

MeuObjeto.prototype.nome = "Anônimo";
MeuObjeto.prototype.falar = function () {
  console.log(`Bom dia, ${this.nome}`);
};

obj1.falar();
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);

console.log(typeof MeuObjeto);
console.log(typeof MeuObjeto.prototype);
console.log(typeof MeuObjeto.__proto__);
console.log(typeof obj1);
