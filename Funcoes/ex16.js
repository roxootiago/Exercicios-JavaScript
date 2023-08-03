const calculadora = function (num1, operacao, num2) {
  switch (operacao) {
    case "+":
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;

    case "-":
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;

    case "*":
      console.log(`${num1} x ${num2} = ${num1 * num2}`);
      break;

    case "/":
      console.log(`${num1} ÷ ${num2} = ${num1 / num2}`);
      break;

    default:
      console.log("Operação inválida");
      break;
  }
};

calculadora(10, "+", 5);
calculadora(10, "-", 5);
calculadora(10, "*", 5);
calculadora(10, "/", 5);
calculadora(10, ".", 5);