// 06 - funkcja find
// Zwraca pierwszy element tablicy, który spełnia warunek podanej funkcji testującej. 
// W przeciwnym razie, gdy żaden element tablicy nie spełni warunku, zwracana jest wartość undefined.

const people = [
  { name: 'Janek', age: 31 },
  { name: 'Wiola', age: 35 },
  { name: 'Mateusz', age: 29 },
  { name: 'Kamila', age: 25 },
  { name: 'Olaf', age: 33 },
  { name: 'Sylwia', age: 25 }
];

people.find = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      return this[i];
    }
  }
  return undefined;
}

const person25 = people.find(person => person.age === 25);

console.log(person25);




