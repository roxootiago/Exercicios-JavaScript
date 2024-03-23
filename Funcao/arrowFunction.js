let dobro = function (a) {
  return 2 * a;
};

console.log(dobro(3));

dobro = (a) => {
  return 2 * a;
};/* utilizar quando tiver mais de um parâmetro */

dobro = a => 2 * a; /* quando tiver apenas um parâmetro 
return implicito*/
console.log(dobro(2));

let texto = function () {
  return "oi";
};

console.log(texto());
texto = () => "oi";
texto = _ => "oii"; //possui um parametro mas será ignorado
console.log(texto());
