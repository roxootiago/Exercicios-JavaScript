const peso1 = 1.0;
const peso2 = Number("2.0");

/* console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2)) */

const avaliacao1 = 6.946;
const avaliacao2 = 8.478;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media)
console.log(media.toPrecision(3)) 
console.log(media.toFixed(2));
