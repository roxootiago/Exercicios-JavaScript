/* criando objeto pai */

const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}km/h de ${this.velMax}`;
  },
};

/* criando objetos filho */

const ferrari = {
  modelo: "F40",
  velMax: 200,
};

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

/* criando métodos */

Object.setPrototypeOf(
  ferrari,
  carro
); /* criando uma herança (objeto filho, objeto pai) */
Object.setPrototypeOf(volvo, carro);

console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());
volvo.acelerarMais(100);
console.log(volvo.status());
volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());
