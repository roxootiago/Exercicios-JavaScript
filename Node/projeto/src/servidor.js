const porta = 3003

const express = require("express")
const bancoDeDados = require('./db')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))


app.get('/produtos', (req,res) => {
    res.send(bancoDeDados.getProdutos())
})
app.get('/produtos/:id', (req,res) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    let id = req.params.id
    let preco = req.body.preco
    res.send(preco)
})


app.patch("/produtos/:id", (req, res) => {
  const id = req.params.id;
  const novosDados = req.body;

  const produtoAtualizado = bancoDeDados.atualizarProduto(id, novosDados);

  if (produtoAtualizado) {
    res
      .status(200)
      .json({
        message: "Produto atualizado com sucesso",
        produto: produtoAtualizado,
      });
  } else {
    res.status(404).json({ error: "Produto não encontrado" });
  }
});

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto)
})

app.listen (porta, () => {
    console.log(`http://localhost:${porta}`)
})
