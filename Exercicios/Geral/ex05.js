function numero(n1, n2) {
  if (typeof n1 == "string" || typeof n2 == "string") {
    console.log(`Serão aceitos apenas números`);
  } else if (n1 > n2) {
    console.log(`${n1} é maior que ${n2}`);
  } else if (n1 > n2) {
    console.log(`${n2} é maior que ${n1}`);
  } else {
    console.log(`Os números são iguais`);
  }
}

numero(0, 0);
numero(0, "0");
numero(5, 1);
