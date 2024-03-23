const equacao = function (a, b, c) {
  const resultados = [];
  let delta = b ** 2 - 4 * a * c;

  if (delta < 0) {
    return "O delta é negativo";
  } else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x1 = x1.toFixed(2);
    resultados.push(x1);
    

    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    x2 = x2.toFixed(2);
    resultados.push(x2);
    
    return resultados
  }
};
console.log(equacao(1, 0, -1444));
console.log(equacao(1, 4, 5));
console.log(equacao(2, -7, 10));
console.log(equacao(2, 5, -3));
console.log(equacao(4, 7, 2))
console.log(equacao(1, -4, 3))
// console.log(resultados);
