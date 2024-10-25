const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3003

app.use(bodyParser.urlencoded({extended: true}));

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send("<h1>Parabéns!</h1>");
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.body)
    console.log(req.params.id)
    res.send(`<h1>Usuário ${req.body.nome} alterado com sucesso</h1>`);
})

app.listen(port, () => {
    console.log(`http://localhost${port}`);
});