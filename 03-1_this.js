// 03.1 - wskaźnik this

let person = {
  name: 'Majka',
  hello: function () {
    console.log(`Cześć ${this.name}!`);
  }
};

person.hello();
