'use strict';
let input;
let total = 0;

do {
  input = prompt('Введите число!');
  input = Number(input);
  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз!');
    break;
  }
  total += input;
  console.log(total);
} while (input !== 0);
alert(`Общая сумма чисел равана ${total}`);

//
//
//
// "Огрызки кода - необращать внимание."

// input === null;

// do {
//   input = prompt('Введите число!');
//   input = Number(input);
//   !Number.isNaN(input);
//   total += input;
//   console.log(total);
// } while (!Number.isNaN(input)); {
//   input === NaN {

//   }
// }

// if (Number.isNaN(input)) {
//   alert('Было введено не число, попробуйте еще раз!');
//   input = prompt('Введите число!');
//   input = 0;
// } else if (input === null);
// {
//   alert(`Общая сумма чисел равана ${total}`);
// }

// input === null;
// {
//   alert(`sum ${sum}`);
//   break;
// }

// let userAnswer;
// do {
//   userAnswer = prompt('your age?');
//   console.log(userAnswer);
// } while (userAnswer > 18);
