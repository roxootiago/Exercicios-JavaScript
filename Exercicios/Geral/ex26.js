let removerVogais = (texto) => {
  let arrayVogais = ["a", "e", "i", "o", "u"];

  arrayVogais.forEach((e) => (texto = texto.replace(e, "")));
  return texto;
};
console.log(removerVogais("Fundamentos"));


