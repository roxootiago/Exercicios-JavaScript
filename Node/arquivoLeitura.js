const fs = require("fs");

const caminho = `${__dirname}/arquivo.json`;

//sincrono (não indicado)
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

// assincrono
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}: ${config.db.port}`);
});

// forma simplificada
const config = require("./arquivo.json"); /* necessário especificar a extenção do arquivo */
console.log(`${config.db.user}:${config.db.pass}`);

// lendo pastas
fs.readdir(__dirname, (err, arquivos) => {
  console.log(`Conteúdo da pasta:`);
  console.log(arquivos);
});
