// 01.2 - wyciągnięcie logiki do funkcji

function forEach(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i]);
  }
}

const names = ['Janek', 'Wiola', 'Mateusz', 'Kamila', 'Olaf', 'Sylwia'];
forEach(names);
