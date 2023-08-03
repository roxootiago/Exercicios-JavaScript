const aumento = function (plano, salario) {
  switch (plano) {
    case "A":
      console.log(`Salário atual: R$${salario}
Aumento: 10%
Salario com aumento: R${salario + (salario * 10) / 100}`);
      break;

    case "B":
      console.log(`Salário atual: R$${salario}
Aumento: 15%
Salario com aumento: R${salario + (salario * 15) / 100}`);
      break;

    case "C":
      console.log(`Salário atual: R$${salario}
Aumento: 20%
Salario com aumento: R${salario + (salario * 20) / 100}`);
      break;

    default:
      console.log("O plano é inválido");
      break;
  }
};

aumento("C", 2000);
aumento("B", 1800);
aumento("A", 850);
aumento("D", 2000);
