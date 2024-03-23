const notas = [8.6, 9.0, 5.6, 7.5, 2.9];

for (let i = 0; i < notas.length; i++) {
  console.log(`${i}. ${notas[i]}`);
}

console.log("UTILIZANDO FOR IN");

for (i in notas) {
  console.log(`${i}. ${notas[i]}`);
}


const pessoa = {
  nome: "Tiago",
  funcao: "Programador Web",
  cargo:"Estagiário"
}

for (let p in pessoa) {
  console.log(p,":",pessoa[p])
}