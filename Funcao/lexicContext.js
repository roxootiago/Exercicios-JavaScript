const valor = "global";

function funcao() {
  console.log(valor);
}

function exec() {
  const valor = "Local";
  funcao();
  return valor;
}

exec();
