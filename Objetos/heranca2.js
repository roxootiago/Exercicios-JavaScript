Object.prototype.attr0 = "você chegou ao topo";

const avo = { attr1: "A" };//último objeto do topo apontará para Object.prototype
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };

console.log(filho.attr2);
console.log(filho.attr0);
