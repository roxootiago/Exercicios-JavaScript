const pai = { nome: "Pedro", corCabelo: "preto" };

const filha1 =
  Object.create(pai); /* cria com base nos parâmetros do objeto pai */
console.log(filha1.corCabelo);
console.log(filha1);

filha1.nome = "Beatriz";
console.log(filha1);

const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true },
});

console.log(filha2);
filha2.nome = "Carla";
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

/* checando se o objeto detem aquele atributo ou é por herança */
for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança ${key}`);
}
