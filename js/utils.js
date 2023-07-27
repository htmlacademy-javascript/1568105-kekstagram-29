import { ALERT_SHOW_TIME } from './constants.js';

// генерация случайного числа
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// генерация случайного числа с контролем (без) повторений
const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('somethingWrong');
  alertContainer.style.margin = '0 auto';
  alertContainer.style.width = '600px';
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '15px 3px';
  alertContainer.style.fontSize = '23px';
  alertContainer.style.color = 'yellow';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.borderRadius = '0 0 15px 15px';
  // alertContainer.style.background = 'linear-gradient(to right, rgba(255, 57, 0, 0.0), rgba(255, 57, 0, 1.0) 10%, rgba(255, 57, 0, 1.0) 90%,rgba(255, 57, 0, 0.0) 100%';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

//
const checkLength = (str, lettersLimit) => str.length <= lettersLimit;

export {
  getRandomInteger,
  createRandomIdFromRangeGenerator,
  checkLength,
  showAlert
};
