const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();

const renderThumbnail = (pictures) => {
  pictures.forEach((element) => {
    console.log(element);
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = element.url;
    pictureElement.querySelector('.picture__img').alt = element.description;
    pictureElement.querySelector('.picture__comments').textContent = element.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = element.likes;
    pictureFragment.append(pictureElement);
  });
  pictureContainer.append(pictureFragment);
};

export { renderThumbnail }
