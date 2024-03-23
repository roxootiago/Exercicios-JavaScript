const moduloA = require("../../moduloA");
const nome = "Tiago";
const saudacao = moduloA.ola;

console.log(`${saudacao}, ${nome}!`);

// require sempre referenciará o arquivo index.js
const c = require("./pastaC");
console.log(c.ola2)

// utilizando modulo nativo node
/* const http = require("http")
http.createServer((req,res) => {
    res.write("Bom dia!")
    res.end()
}).listen(8080) */
