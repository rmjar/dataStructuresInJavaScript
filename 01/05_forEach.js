// 05 - funkcja forEach
// Wykonuje dostarczoną funkcję jeden raz na każdy element tablicy

function log(arg) {
  console.log(arg);
}

const names = ['Janek', 'Wiola', 'Mateusz', 'Kamila', 'Olaf', 'Sylwia'];
names.forEach(name => log(`Cześć ${name}!`));
