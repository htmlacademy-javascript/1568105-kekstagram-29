const PHOTOS = 25;

const MIN_LIKES = 0;
const MAX_LIKES = 999;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 10;

const COMMENTS = 5000;

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const COMMENTS_DOSE = 5;

const MAX_DESCRIPTION_LENGTH = 140;

const MAX_HASHTAGS_VOLUME = 5;

const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i; // Циркумфлекс

const SCALE_STEP = 25;
const MAX_SCALE = 100;
const MIN_SCALE = 25;

const POST_DATA_URL = 'https://28.javascript.pages.academy/kekstagram';
const GET_DATA_URL = 'https://28.javascript.pages.academy/kekstagram/data';

const THEN_MESSAGE = 'Что то пошло не так';
const CATCH_MESSAGE = 'Что то пошло совсем не так';

const ALERT_SHOW_TIME = 5000;

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SUBMITTING: 'Публикую...'
};

export {
  PHOTOS,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  COMMENTS,
  MIN_AVATAR,
  MAX_AVATAR,
  COMMENTS_DOSE,
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_VOLUME,
  HASHTAG_SYMBOLS,
  SCALE_STEP,
  MAX_SCALE,
  MIN_SCALE,
  POST_DATA_URL,
  GET_DATA_URL,
  ALERT_SHOW_TIME,
  THEN_MESSAGE,
  CATCH_MESSAGE,
  SubmitButtonText
};
