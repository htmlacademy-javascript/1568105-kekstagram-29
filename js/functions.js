// Функция для проверки длины строки
const checkLength = (str, lettersLimit) => str.length <= lettersLimit;

// console.log(checkLength('проверяемая строка', 10));



// Функция для проверки строки на палиндром
const isPalindrome = (str) => {
  let editedStr = str.replaceAll(' ', '').toLowerCase();
  let newStr = '';

  for (let i = editedStr.length - 1; i >= 0; i--) {
    newStr += editedStr[i];
  }
  return editedStr === newStr;
}

// console.log(isPalindrome('Лёша на полке клопа нашёл ') ? 'Палиндром' : 'Не палиндром');


// Функция возвращающая целые положительные числа
const returnIntegers = (str) => {
  let newString = '';

  str = str.toString();

  for (let i = 0; i < str.length; i++) {
    newString += !Number.isNaN(parseInt(str[i], 10)) ? parseInt(str[i], 10) : '';
  }

  return parseInt(newString, 10);
}
// console.log(returnIntegers('2023 год'));
// console.log(returnIntegers('ECMAScript 2022'));
// console.log(returnIntegers('1 кефир, 0.5 батона'));
// console.log(returnIntegers('агент 007'));
// console.log(returnIntegers('а я томат'));
// console.log(returnIntegers(2013));
// console.log(returnIntegers(-1));
// console.log(returnIntegers(1.5));
