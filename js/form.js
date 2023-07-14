import { validateForm } from "./validation.js";

const uploadControl = document.querySelector('.img-upload__input');
const uploadModal = document.querySelector('.img-upload__overlay');
const uploadModalImage = uploadModal.querySelector('.img-upload__preview img');
const uploadModalEffectsControlIcons = uploadModal.querySelectorAll('.effects__preview');
const uploadModalCancel = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');

const renderPreviewImage = () => {
  const fileImage = uploadControl.files[0];
  uploadModalImage.src = URL.createObjectURL(fileImage); // <<<
  uploadModalEffectsControlIcons.forEach((icon) => {
    icon.style.backgroundImage = `url("${URL.createObjectURL(fileImage)}")`; // <<<
  });
};

const showModal = () => {
  uploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  renderPreviewImage();
  document.addEventListener('keydown', onClickEsc);
  uploadModal.addEventListener('click', onClickOutside);
};

const closeModal = () => {
  uploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset();
  document.removeEventListener('keydown', onClickEsc);
  uploadModal.removeEventListener('click', onClickOutside);
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (validateForm()) {
    // отправка данных на сервер
    // анализ
    // анализ и открытие окна ответа
    // успех/не успех
    closeModal();
  }
});

uploadControl.addEventListener('change', () => {
  showModal();
});

uploadModalCancel.addEventListener('click', () => {
  closeModal();
});

function onClickEsc(evt) {
  const isFocusedInput = evt.target.classList.contains('text__hashtags') || evt.target.classList.contains('text__description');
  if (isFocusedInput) {
    return false;
  }
  if (evt.key === 'Escape') {
    closeModal();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('img-upload__overlay')) {
    closeModal();
  }
};
