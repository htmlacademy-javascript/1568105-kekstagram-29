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
};

const closeModal = () => {
  uploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadForm.reset(); //
};

uploadControl.addEventListener('change', () => {
  showModal();
});

uploadModalCancel.addEventListener('click', () => {
  closeModal();

})

// доделать закрытие: esc + шторка
