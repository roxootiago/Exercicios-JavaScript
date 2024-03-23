let a = 3;
global.b = 123;
this.c = 456;
this.d = false;
this.e = "texto";

console.log(this.a);
console.log(global.a);
console.log(global.b); /* equivale a window no browser */
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports); /* module.exports == this */

/* criando variável sem var e/ou let */
abc = 5
console.log(global.abc) /* nunca fazer isso */