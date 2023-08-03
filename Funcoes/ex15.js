const vendaCarros = function (modelo) {
  switch (modelo) {
    case "hacth":
      console.log("Compra efetuada com sucesso!");
      break;

    case "sendan":
    case "motocicleta":
    case "caminhonete":
      console.log("Tem certeza que não prefere este modelo?");
      break;

    default:
      console.log("Não trabalhamos com esse modelo");
      break;
  }
};

vendaCarros("caminhonete");
vendaCarros("motocicleta");
vendaCarros("ferrari");
vendaCarros("hacth");
