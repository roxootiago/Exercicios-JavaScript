function cliente(nome, sobrenome) {
  return {
    nome: "Tiago",
    sobrenome: "Rôxo",
  };
}

console.log(cliente());

({ nome: nome1 } = cliente());
const { sobrenome: sobrenome1 } = cliente();

console.log(`Nome completo: ${nome1} ${sobrenome1}`);


