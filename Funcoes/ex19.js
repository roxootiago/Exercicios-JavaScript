function cardapio(pedido, quant) {
  switch (pedido) {
    case 100:
      return ["Cachorro Quente", quant, 3 * quant];
    case 200:
      return ["Hambúerguer Simples", quant, 4 * quant];

    case 300:
      return ["Cheeseburguer", quant, 5.5 * quant];

    case 400:
      return ["Bauru", quant, 7.5 * quant];
    case 500:
      return ["Refrigerante", quant, 3.5 * quant];
    case 600:
      return ["Suco", quant, 2.8 * quant];
  }
}

pedido1 = cardapio(100, 3);
console.log(`Pedido: ${pedido1[0]}
Quantidade: ${pedido1[1]}
Valor: R$${pedido1[2].toFixed(2).replace(".", ",")}\n`);

pedido2 = cardapio(600, 4);
console.log(`Pedido: ${pedido2[0]}
Quantidade: ${pedido2[1]}
Valor: R$${pedido2[2].toFixed(2).replace(".", ",")}\n`);

pedido3 = cardapio(300, 1);
console.log(`Pedido: ${pedido3[0]}
Quantidade: ${pedido3[1]}
Valor: R$${pedido3[2].toFixed(2).replace(".", ",")}\n`);

pedido4 = cardapio(200, 1);
console.log(`Pedido: ${pedido4[0]}
Quantidade: ${pedido4[1]}
Valor: R$${pedido4[2].toFixed(2).replace(".", ",")}\n`);

pedido5 = cardapio(500, 1);
console.log(`Pedido: ${pedido5[0]}
Quantidade: ${pedido5[1]}
Valor: R$${pedido5[2].toFixed(2).replace(".", ",")}\n
Total: R$${(pedido1[2] + pedido2[2] + pedido3[2] + pedido4[2] + pedido5[2])
  .toFixed(2)
  .replace(".", ",")}`);
