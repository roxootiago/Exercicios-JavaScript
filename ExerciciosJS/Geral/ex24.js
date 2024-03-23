let contarCaractere = (letra, texto) => {
  let count = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) === letra) {
      count++;
    }
  }

  return count;
};

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("e", "Conhece-te a ti mesmo"));
