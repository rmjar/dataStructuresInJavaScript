// 03.2 - wskaźnik this

const names = ['Janek', 'Wiola', 'Mateusz', 'Kamila', 'Olaf', 'Sylwia'];

names.forEach = function (fn) {
  for (let i = 0; i < this.length - 1; i++) {
    fn(this[i]);
  }
}

names.forEach(console.log);
