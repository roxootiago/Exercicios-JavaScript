const triangulo = function (a, b, c) {
  if (a == b && b == c && c == a) {
    console.log("O triângulo é isóceles");
  } else if (a == b || b == c || c == a) {
    console.log("O triângulo é escaleno");
  } else {
    console.log("O triângulo é equilatéro");
  }
};

triangulo(3, 3, 3);
triangulo(3, 3, 4);
triangulo(3,2,4)
