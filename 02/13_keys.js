const obj = {
  name: "Mayer Aguirre",
  gender: "male",
  company: "BUGSALL",
  sayHello: function () { console.log(`Hello ${this.name}`); }
};

const keys = Object.keys(obj); // ['name', 'gender', 'company', 'sayHello']
keys.forEach(key => {
  console.log(key);
});

const hasToString = typeof (obj.toString) === 'function'; // true 
const hasOwnToString = obj.hasOwnProperty('toString');    // false