const sliderElement = document.querySelector('.effect-level__slider');
const radioList = document.querySelector('.effects__list');
const valueElement = document.querySelector('.effect-level__value');
const image = document.querySelector('.img-upload__preview img');
const sliderBlock = document.querySelector('.img-upload__effect-level');
const originalRadio = document.querySelector('#effect-none');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower'
});

const updateSliderOption = (effect) => {
  switch (effect) {
    case 'chrome':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        start: 1,
        step: 0.1,
      });
      break;
    case 'sepia':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1,
        },
        step: 0.1,
        start: 1,
      });
      break;
    case 'marvin':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100,
        },
        step: 1,
        start: 100,
      });
      break;
    case 'phobos':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;
    case 'heat':
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3,
        },
        step: 0.1,
        start: 3,
      });
      break;
  }
};

const renderEffect = (effect) => {
  let filterStyle = '';
  switch (effect) {
    case 'chrome':
      filterStyle = `grayscale(${valueElement.value})`;
      break;
    case 'sepia':
      filterStyle = `sepia(${valueElement.value})`;
      break;
    case 'marvin':
      filterStyle = `invert(${valueElement.value}%)`;
      break;
    case 'phobos':
      filterStyle = `blur(${valueElement.value}px)`;
      break;
    case 'heat':
      filterStyle = `brightness(${valueElement.value})`;
      break;
  }
  image.style.filter = filterStyle;
};

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
  renderEffect(document.querySelector('.effects__radio:checked').value);
});

radioList.addEventListener('change', (evt) => {
  if (evt.target.name === 'effect') {
    if (evt.target.value === 'none') {
      sliderBlock.classList.add('hidden');
      image.style.filter = '';
    } else {
      updateSliderOption(evt.target.value);
      renderEffect(evt.target.value);
      sliderBlock.classList.remove('hidden');
    }
  }
});

const resetEffects = () => {
  sliderBlock.classList.add('hidden');
  image.style.filter = '';
  originalRadio.checked = true;
};

export { resetEffects };
