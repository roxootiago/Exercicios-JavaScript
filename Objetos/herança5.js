console.log(typeof String);
console.log(typeof Array);

String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};

console.log("Tiago".reverse());

Array.prototype.first  = function() {
 return this[0]
}

console.log(['T','i','a','g','o'].first())