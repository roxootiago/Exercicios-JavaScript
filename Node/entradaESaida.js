const anonimo = process.argv.indexOf("-a") !== -1;

if (anonimo) {
  console.log("Fala tu");
} else {
  process.stdout.write("Informe seu nome: ");
  process.stdin.on("data", (data) => {
    const nome = data.toString().trim();

    process.stdout.write(`Fala, ${nome} `);
    process.exit();
  });
}
