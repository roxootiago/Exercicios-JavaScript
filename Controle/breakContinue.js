let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("UTILIZANDO BREAK");
for (x in lista) {
  if (x == 5) {
    break;
  }
  console.log(`${x}: ${lista[x]} `);
}

console.log("UTILIZANDO CONTINUE");
for (y in lista) {
  if (y == 5) {
    /* irá pular a iteração 5:6 */ continue;
  }
  console.log(`${y}: ${lista[y]} `);
}

console.log("UTILIZANDO METODOS");
externo: for (a in lista) {
  for (b in lista) {
    if (a == 2 && b == 3) break externo;
    console.log(`Par: ${a},${b}`);
  }
} /* evitar usar esse metodo */
