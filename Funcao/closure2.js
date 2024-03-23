function makeadder(x) {
  return function (y) {
    return x + y;
  };
}

const makeadder5 = makeadder(5); // atribuindo 5 => x
const makeadder10 = makeadder(10);// atribuindo 10 => x

console.log(makeadder5(2));// atribuindo 2 => y
console.log(makeadder10(3));// atribuindo 3 => y
