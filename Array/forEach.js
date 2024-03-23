let aprovados = ['Tiago','Gabriela','Inara','Joel']

/* escopo: array.forEach(elemento,indice,array) */
aprovados.forEach((element,indice,array) => {
    console.log(`${indice + 1}) ${array[indice]}`)
})
aprovados = ['Tiago','Luisa','Inara','Joel']

aprovados.forEach((element,indice,array) => {
    console.log(`${indice + 1}) ${element}`)
})

aprovados.forEach(element => console.log(element))

const exibirResultado = aprovado => console.log(aprovado)
aprovados.forEach(exibirResultado)