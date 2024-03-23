const { isBoolean, isNumber } = require("lodash");

const func = (b) => b * 2;
const inverso = (a) =>
  isNumber(a) ? 
    a - func(a)
    : isBoolean(a)
    ? !a : "Esperados valores booleanos ou numéricos"

console.log(inverso(2000));
console.log(inverso(true));
console.log(inverso("6"));

