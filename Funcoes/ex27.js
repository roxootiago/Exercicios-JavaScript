function crescimentoAnual(
  alturaCrianca,
  taxaCrescimento,
  alturaCrianca2,
  taxaCrescimento2
) {
  if (alturaCrianca == alturaCrianca2) {
    if (taxaCrescimento > taxaCrescimento2) {
      return `A criança 1 ultrapassará a criança 2 em 1 ano`;
    } else if (taxaCrescimento < taxaCrescimento2) {
      return `A criança 2 ultrapassará a criança 1 em 1 ano`;
    } else {
      return `As crianças tem altura e crescimento iguais`;
    }
  } else {
    if (alturaCrianca > alturaCrianca2) {
      if (taxaCrescimento >= taxaCrescimento2) {
        return `A criança menor não ultrapassará a maior`;
      } else {
        return `A criança menor ultrapassará a maior em ${calcularAnos(
          alturaCrianca2,
          taxaCrescimento2,
          alturaCrianca,
          taxaCrescimento
        )} anos`;
      }
    } else {
      if (taxaCrescimento2 >= taxaCrescimento) {
        return `A criança menor não ultrapassará a maior`;
      } else {
        return `A criança menor ultrapassará a maior em ${calcularTempo(
          alturaCrianca,
          taxaCrescimento,
          alturaCrianca2,
          taxaCrescimento2
        )} anos`;
      }
    }
  }
}

function calcularAnos(
  alturaMenor,
  taxaAlturaMenor,
  alturaMaior,
  taxaAlturaMaior
) {
  let qntdAnos = 0;

  while (alturaMenor < alturaMaior) {
    alturaMenor += taxaAlturaMenor;
    alturaMaior += taxaAlturaMaior;
    qntdAnos++;
  }

  return qntdAnos;
}

console.log(crescimentoAnual(150, 2, 137, 4));
