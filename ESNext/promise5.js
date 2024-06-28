function tratandoErros(valor, chance) {
    return new Promise((resolve, reject) => {
         try{if (Math.random() < chance) {
            reject('Aconteceu um erro!')
        } else {
            resolve(valor);
        } }catch (e) {
            reject(`Erro: ${e.message}`)
        }
    })
}

tratandoErros('teste', 0.5)
.then(v => `Valor: ${v}`)
.then(v => consol.log(v),
err => console.log(`Erro específico: ${err}
Message: ${err.message}`))
.then (() => console.log(`Quase fim!`))
.catch (err => console.log(`Erro geral: ${err}
    Message: ${err.message}`))
    .then (console.log(`Fim!`))