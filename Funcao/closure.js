// escopo criado quando uma função é declarada

const x = "global";

function fora() {
  const x = "local";
  function dentro() {
    return x;
  }
  return dentro();
}

const a = fora();
console.log(x);
console.log(fora());
console.log(a);
