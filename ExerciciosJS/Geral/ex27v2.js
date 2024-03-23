 let inverter = (objeto) => {
    let chaveValorInvertido = Object.entries(objeto).map(chaveValor => chaveValor.reverse())

    return Object.fromEntries(chaveValorInvertido)
    
 }

 console.log(inverter({ a: 1, b: 2, c: 3 }));