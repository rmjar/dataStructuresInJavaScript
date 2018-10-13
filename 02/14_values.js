const obj = {
  name: "Mayer Aguirre",
  age: 30,
  sayHello: function () { console.log(`Hello ${this.name}`); }
};

const values = Object.values(obj);
// values == ['Mayer Aguirre', 30, 'sayHello']
const typesOfValues = values.map(value => typeof value);
// typesOfValues == ['string', 'number', 'function']