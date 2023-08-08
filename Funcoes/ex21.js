function convenio(idade) {
  if (idade > 0 && idade < 10) {
    return 100 + 80;
  } else if (idade >= 10 && idade <= 30) {
    return 100 + 50;
  } else if (idade > 30 && idade <= 60) {
    return 100 + 95;
  } else if (idade > 60) {
    return 100 + 130;
  }
}

console.log(convenio(25));
console.log(convenio(35));
