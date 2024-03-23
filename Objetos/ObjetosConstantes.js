let nome = "Tiago";
let senha = "1234";
let cadastro = {
  nome,
  senha
};

console.log(cadastro);

cadastro.nome = "Paulo";
console.log(cadastro);

cadastro.senha = "4321";
console.log(cadastro.senha);

Object.freeze(cadastro.senha); /* não irá funcionar */
Object.freeze(cadastro); /* congelando o objeto para modificações */

cadastro.senha = "1234";
console.log(cadastro.senha);
cadastro.nome = "Luana";
console.log(cadastro);
