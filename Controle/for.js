let contador = 1;

console.log("******* WHILE *******");
while (contador <= 10) {
  console.log(`contador: ${contador}`);
  contador++;
}

console.log("******* FOR *******");
for (let i = 1; i <= 10; i++) {
  console.log(`contador: ${i}`);
}

console.log("******* NOTAS *******");
const notas = [8.6, 9.0, 5.6, 7.5, 2.9];
for (let i = 0; i < notas.length; i++) {
  console.log(`nota: ${i}. ${notas[i]}`);
}
