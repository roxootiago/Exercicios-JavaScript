const meuobj = { a: 1, b: 2, c: 3 };

let i;

for (i in meuobj) {
  console.log(i);
}

for (i of meuobj) {
  console.log(meuobj[i]);
}
