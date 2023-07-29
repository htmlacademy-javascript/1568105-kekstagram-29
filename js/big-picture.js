import { COMMENTS_DOSE } from './constants.js';

const outsideBigPicture = document.querySelector('.overlay');
const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const bigPictureLikes = bigPicture.querySelector('.likes-count');
const bigPictureTitle = bigPicture.querySelector('.social__caption');
const bigPictureCommentsCount = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentContainer = bigPicture.querySelector('.social__comments');
const bigPictureCommentItem = bigPicture.querySelector('.social__comment');
const bigPictureCommentField = bigPicture.querySelector('.social__footer-text');
const bigPictureCommentLoader = bigPicture.querySelector('.social__comments-loader');

const commentsList = [];

let commentsVolume = 0;

const renderButtonLoader = () => {
  if (!commentsList.length) {
    bigPictureCommentLoader.classList.add('hidden');
  } else {
    bigPictureCommentLoader.classList.remove('hidden');
  }
};

const renderStatistic = () => {
  bigPictureCommentsCount.innerHTML = `${commentsVolume - commentsList.length} из <span class="comments-count">${commentsVolume}</span> комментариев`;
};

const renderComment = (comment) => {
  const commentElement = bigPictureCommentItem.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__picture').alt = comment.name;
  commentElement.querySelector('.social__text').textContent = comment.message;
  return commentElement;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  commentsList.splice(0, COMMENTS_DOSE).forEach((item) => {
    fragment.append(renderComment(item));
  });
  bigPictureCommentContainer.append(fragment);
  renderButtonLoader();
  renderStatistic();
};

const openBigPicture = (photo) => {
  document.body.classList.add('modal-open');
  commentsVolume = photo.comments.length;
  bigPictureCommentContainer.innerHTML = '';
  bigPicture.classList.remove('hidden');
  bigPictureImage.src = photo.url;
  bigPictureLikes.textContent = photo.likes;
  bigPictureTitle.textContent = photo.description;

  commentsList.length = 0;
  commentsList.push(...photo.comments.slice());

  bigPictureCommentField.placeholder = photo.comments.length === 0 ? 'Будьте первым комментатором!' : 'Ваш комментарий...';

  renderComments(photo.comments);
  document.addEventListener('keydown', onClickEsc);
  outsideBigPicture.addEventListener('click', onClickOutside);
};

bigPictureCommentLoader.addEventListener('click', (evt) => {
  evt.preventDefault();

  renderComments();
});

const closeBigPicture = () => {
  document.body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onClickEsc);
  outsideBigPicture.removeEventListener('click', onClickOutside);
};

closeButton.addEventListener('click', () => {
  closeBigPicture();
});

function onClickEsc(evt) {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
}

function onClickOutside(evt) {
  if (evt.target.classList.contains('overlay')) {
    closeBigPicture();
  }
}

export { openBigPicture };
