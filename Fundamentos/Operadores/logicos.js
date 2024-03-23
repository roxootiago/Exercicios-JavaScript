function compras(trabTer, trabQuinta) {
  const comprarSorvete = trabTer || trabQuinta; /* ou */
  const comprarTV50 = trabTer && trabQuinta; /* e */
  /* const comprarTV32 = !!(trabTer ^ trabQuinta) bitwise xor */
  const comprarTV32 = trabTer != trabQuinta;
  const semSorvete = !comprarSorvete;

  return { comprarSorvete, comprarTV32, comprarTV50, semSorvete };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
