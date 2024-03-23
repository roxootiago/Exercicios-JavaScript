function anuidadade(mes, valor) {
  switch (mes) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      return `R$${(valor * (1 + 0.05) ** (mes - 1)).toFixed(2)}`;z
    default:
      return `mês inválido`;
  }
}

console.log(anuidadade(4, 100));
console.log(anuidadade(14, 740));
