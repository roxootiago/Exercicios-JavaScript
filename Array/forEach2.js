/* simulando a função callback */

Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

const aprovados = ["Tiago", "Gabriel", "Lucas"];
aprovados.forEach2((element, index, array) => {
  console.log(`${index + 1}) ${element}
${array[index]}`);
});
