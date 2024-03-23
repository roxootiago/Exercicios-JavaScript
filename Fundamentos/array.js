const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores);
console.log(valores[0], valores[3]);

console.log(valores[4]);

valores[10] = 10;
console.log(valores);

valores[5] = 9.4;
console.log(valores);

valores[4] = 5.4;
console.log(valores);

console.log(valores[6]);

console.log(valores.length); /* informa quantos elementos existem no array */

valores.push({ id: 3 }, false, null, "teste"); /* adiciona elementos ao array */
console.log(valores);
console.log(valores.length);

console.log(valores.pop()); /* recorta o último valor do array */
console.log(valores);

delete valores[11]; /* deleta item do array */
console.log(valores);

const valor = valores.slice(1, 3); // seleciona o argumento inicial até  o último(não está incluso)
console.log(valor);

const linguagens = ["JavasCript", "Next", "Vue", "React", "TypeScript"];
console.log(linguagens);
linguagens.splice(1, 2, "Angular", "Node"); //Remove itens do array => (posição onde vai substituir,quantos vão ser excluídos,"parâmetros")
console.log(linguagens);

const meninos = ["Luan", "Henrique", "Tiago"];
const meninas = ["Luana", "Maria", "Amanda"];
const criancas = meninas.concat(meninos);
console.log(criancas);

console.log(typeof valores);
