function tratarErroELancar(erro) {
  /* throw new Error("...") */
  /* throw "mensagem"; */
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date(),
  };
}

const obj = { nome: "Roberto" };
function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    console.log("Encontrei um erro...");
    tratarErroELancar(e);
  }
}

imprimirNomeGritado(obj);
