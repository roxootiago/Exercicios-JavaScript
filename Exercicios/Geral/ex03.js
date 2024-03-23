function calcularSalario(horasTrabalho, salarioHora) {
  const salario = horasTrabalho * salarioHora;
  const salarioFormatado = (s) => parseFloat(s).toFixed(2).replace(".", ",");
  return `Salário atual: R$${salarioFormatado(salario)}`;
}

console.log(calcularSalario(150, 40.5));
