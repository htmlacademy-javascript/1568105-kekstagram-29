import { onEscForm } from './form.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const showPopupSuccess = () => {
  const successPopupElement = successTemplate.cloneNode(true);
  document.body.append(successPopupElement);
  successPopupElement.classList.add('popup');

  const itsCoolButton = document.querySelector('.success__button');
  itsCoolButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', onEsc);
  document.addEventListener('click', onClickOutside);
};

const showPopupError = () => {
  const errorPopupElement = errorTemplate.cloneNode(true);
  document.body.append(errorPopupElement);
  errorPopupElement.classList.add('popup');

  const tryAgainButton = document.querySelector('.error__button');
  tryAgainButton.addEventListener('click', closePopup);
  document.addEventListener('keydown', onEsc);
  document.addEventListener('click', onClickOutside);
};

const closePopup = () => {
  document.querySelector('.popup').remove();

  document.removeEventListener('keydown', onEsc);
  document.removeEventListener('click', onClickOutside);

  document.addEventListener('keydown', onEscForm);
};

function onEsc(evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
};

function onClickOutside(evt) {
  if (evt.target.classList.contains('success') || evt.target.classList.contains('error')) {
    closePopup();
  }
}

export {
  showPopupSuccess,
  showPopupError
};
