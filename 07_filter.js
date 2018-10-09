// 07 - funkcja filter
// Tworzy nową tablicę z wszystkimi elementami, które przechodzą test określony w postaci funkcji.

const people = [
  { name: 'Janek', age: 31 },
  { name: 'Wiola', age: 35 },
  { name: 'Mateusz', age: 29 },
  { name: 'Kamila', age: 25 },
  { name: 'Olaf', age: 33 },
  { name: 'Sylwia', age: 25 }
];

people.filter = function (fn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
}

const people25 = people.filter(person => person.age === 25);

people25.forEach(person => console.log(`${person.name} ${person.age}`));
