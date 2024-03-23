const divisao = function (dividendo, divisor) {
  console.log(`${dividendo} ÷ ${divisor} = ${(dividendo / divisor).toFixed(2)}
${dividendo % divisor}`);
};

divisao(10, 3);
