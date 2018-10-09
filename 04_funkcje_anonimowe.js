// 04 - funkcje anominowe

const names = ['Janek', 'Wiola', 'Mateusz', 'Kamila', 'Olaf', 'Sylwia'];
names.forEach = function (fn) {
  for (let i = 0; i < this.length - 1; i++) {
    fn(this[i]);
  }
}

names.forEach(name => console.log(`Cześć ${name}!`));