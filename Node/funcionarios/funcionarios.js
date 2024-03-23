const url = `http://files.cod3r.com.br/curso-js/funcionarios.json`;
const axios = require("axios");
const generoFeminino = (e) => e.genero == "F";
const nacionalidadeChinesa = (e) => e.pais == "China";
const menorSalario = (salarioAnterior, salarioAtual) => {
  return salarioAnterior.salario < salarioAtual.salario
    ? salarioAnterior
    : salarioAtual;
};

axios.get(url).then((res) => {
  const funcionarios = res.data;

  let func = funcionarios
    .filter(generoFeminino)
    .filter(nacionalidadeChinesa)
    .reduce(menorSalario);

  console.log(func);
});
