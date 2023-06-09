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

const DESCRIPTIONS = [
  'Утро',
  'Учебный процесс',
  'Котик энд френдз',
  'После цунами',
  'Пантонный мост через Понтар',
  '11000 метров над Землёй',
  'Остров Пасхи',
  'Панорама',
  'Пейзаж',
  'Чёткая композиция',
  'Картина маслом',
  'Снег с дождём',
  'Тихий солнечный осенний день'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Виктория',
  'Иван',
  'Вадим',
  'Елена',
  'Кирилл'
];

export {
  PHOTOS,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  COMMENTS,
  MIN_AVATAR,
  MAX_AVATAR,
  DESCRIPTIONS,
  MESSAGES,
  NAMES,
  COMMENTS_DOSE,
  MAX_DESCRIPTION_LENGTH,
  MAX_HASHTAGS_VOLUME,
  HASHTAG_SYMBOLS
};
