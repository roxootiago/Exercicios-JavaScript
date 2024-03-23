function cumprimentar(name) {
  return name == null ? `Digite algo para retornar` : `Olá, ${name}!`;
}

console.log(cumprimentar("Leonardo"));
console.log(cumprimentar("Maria"));
console.log(cumprimentar());
