function progressaoAritmetica(n, a1, r) {
  for (i = 0; i < n; i++) {
    console.log(a1 + r * i);
  }

  console.log(`Soma: ${(n * (a1 + (a1 + (n - 1) * r))) / 2}`);
}

function progressaoGeometrica(n, a1, r) {
  for (i = 0; i < n; i++) {
    console.log(a1 * r ** i);
  }

  const S = (a1 * (r ** n - 1)) / (r - 1);
console.log(`Soma: ${S}`);

}

progressaoAritmetica(10, 10, 15);
progressaoAritmetica(10, 5, 3);
progressaoAritmetica(7, 10, -2);

progressaoGeometrica(5, 2, 3);
progressaoGeometrica(6, 100, 0.5);
