// 08 - funkcja map
// Tworzy nową tablicę zawierającą wyniki wywoływania podanej funkcji dla każdego elementu wywołującej tablicy

const people = [
  { name: 'Janek', age: 31 },
  { name: 'Wiola', age: 35 },
  { name: 'Mateusz', age: 29 },
  { name: 'Kamila', age: 25 },
  { name: 'Olaf', age: 33 },
  { name: 'Sylwia', age: 25 }
];

people.map = function (fn) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(fn(this[i]));
  }
  return arr;
}

const people25 = people.map(person => `${person.name} ${person.age}`);

people25.forEach(person => console.log(person));

