const pessoa = {
  nome: "Tiago",
  idade: 20,
  estuda: true,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log("bb", Object.entries(pessoa));
console.log(Object.entries(pessoa)[0]);
console.log("ss", Object.entries(pessoa)[0][1]);

/* utilizando o destructuring */

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`-  ${chave}: ${valor}`);
});

/* definindo propriedade */
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: false /* enumerada na lista de chaves */,
  writable: false /* alterável */,
  value: "02/12/2002",
});

console.log(pessoa);
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

/* utilizando assign */
const dest = { nome: null };
const idade = 20;
const info = {
  nome: "Tiago",
  cidade: "Olinda",
};

const obj = Object.assign(dest, idade, info);
console.log(obj);
