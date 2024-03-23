let valor;
console.log(valor); /* variável não foi inicializada */

valor = null; /* variável não aponta para nenhum endereço de memória(vazia) */
console.log(valor);

const produto = {};
console.log(produto.preco);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined;
console.log(!!produto.preco);
delete produto.preco;
console.log(produto);

/* ⚠ evitar usar UNDEFINED
    Dar preferência ao NULL ⚠*/
