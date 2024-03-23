const fruits = ["banana", "pera", "uva", "maçã"];

let [b, , u] = fruits;

console.log(b, u);

[, , ...qualquercoisa] = fruits;
console.log(qualquercoisa);
