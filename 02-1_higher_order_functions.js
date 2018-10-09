// 02.1 - funkcja jako zmienna

// przypisanie funkcji do zmiennej
const hello = function () {
  console.log(`Cześć!`);
}

// przekazanie funkcji do innej zmiennej
const helloCopy = hello;

// wywołanie funkcji i jej kopii
hello();
helloCopy();

// funkcja przyjmująca inną funkcję jako argument
function call(fn) {
  fn();
}

// wywołanie funkcji wyższego rzędu
call(hello);
call(hello2);
