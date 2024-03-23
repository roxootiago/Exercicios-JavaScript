let erroEcontrado = null;
try {
  let obj = undefined;
  console.log(obj);
  console.log(obj.propriedade);
  console.log("ola, mundo!");
  erroEcontrado = false;
} catch (erro) {
  console.log("[Erro]");
  console.log(erro);
  erroEcontrado = null;
  erroEcontrado = true;
} finally {
    erroEcontrado = null
  console.log("Finalizando programa . . .");
}

console.log(erroEcontrado);
