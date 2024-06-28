const fs = require("fs");
const path = require("path");

let conteudo2 = path.join(__dirname, "dados.txt");

function leituraDoArquivo(data) {
  return new Promise((res) => {
    fs.readFile(data, (err, conteudo) => {
      res(conteudo.toString());
    });
  });
}

leituraDoArquivo(conteudo2)
  .then((conteudo) => conteudo.split("\n"))
  .then((dados) => console.log(dados[2]));
