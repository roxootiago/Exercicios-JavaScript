let contarCaractere = (letra,texto) => {
    return [...texto].filter(letraBuscada => letraBuscada === letra).length
}

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("e", "Conhece-te a ti mesmo"));
