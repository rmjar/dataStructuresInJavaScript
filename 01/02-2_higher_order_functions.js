// 02.2 - higher-order functions (funkcje wyższego rzędu)

function forEach(arr, fn) {
  for (let i = 0; i < arr.length - 1; i++) {
    fn(arr[i]);
  }
}

const names = ['Janek', 'Wiola', 'Mateusz', 'Kamila', 'Olaf', 'Sylwia'];
forEach(names, console.log);
