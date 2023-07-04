// Функция для проверки длины строки
const checkLength = (str, lettersLimit) => str.length <= lettersLimit;

// console.log(checkLength('проверяемая строка', 10));


// Функция для проверки строки на палиндром
const isPalindrome = (str) => {
  const editedStr = str.replaceAll(' ', '').toLowerCase();
  let newStr = '';

  for (let i = editedStr.length - 1; i >= 0; i--) {
    newStr += editedStr[i];
  }
  return editedStr === newStr;
};

// console.log(isPalindrome('Лёша на полке клопа нашёл ') ? 'Палиндром' : 'Не палиндром');


// Функция возвращающая целые положительные числа
const returnIntegers = (str) => {
  let newString = '';

  str = str.toString();

  for (let i = 0; i < str.length; i++) {
    newString += !Number.isNaN(parseInt(str[i], 10)) ? parseInt(str[i], 10) : '';
  }

  return parseInt(newString, 10);
};
// console.log(returnIntegers('2023 год'));
// console.log(returnIntegers('ECMAScript 2022'));
// console.log(returnIntegers('1 кефир, 0.5 батона'));
// console.log(returnIntegers('агент 007'));
// console.log(returnIntegers('а я томат'));
// console.log(returnIntegers(2013));
// console.log(returnIntegers(-1));
// console.log(returnIntegers(1.5));



const getMinutesPoint = (str) => {
  const arr = str.split(':');
  return Number(arr[0]) * 60 + Number(arr[1]);
};

const getMinutesPointByDuration = (start, duration) => start + duration;

const isMeetingTimeOk = (startWorkTime, endWorkTime, startMeetingTime, meetingDuration) => {
  return getMinutesPoint(startMeetingTime) >= getMinutesPoint(startWorkTime)
  && getMinutesPoint(startMeetingTime) <= getMinutesPoint(endWorkTime)
  && getMinutesPointByDuration(getMinutesPoint(startMeetingTime), meetingDuration) >= getMinutesPoint(startWorkTime)
  && getMinutesPointByDuration(getMinutesPoint(startMeetingTime), meetingDuration) <= getMinutesPoint(endWorkTime);
};

// console.log(isMeetingTimeOk('08:00', '17:30', '14:00', 90)); // true
// console.log(isMeetingTimeOk('8:0', '10:0', '8:0', 120)); // true
// console.log(isMeetingTimeOk('08:00', '14:30', '14:00', 90)); // false
// console.log(isMeetingTimeOk('14:00', '17:30', '08:0', 90)); // false
// console.log(isMeetingTimeOk('8:00', '17:30', '08:00', 900)); // false

