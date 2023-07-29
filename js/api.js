import {
  POST_DATA_URL,
  GET_DATA_URL,
  THEN_MESSAGE,
  CATCH_MESSAGE
} from './constants.js';

import { showAlert } from './utils.js';

const getPhotos = () =>
  fetch(GET_DATA_URL)
    .then((response) => {
      if (!response.ok) {
        showAlert(THEN_MESSAGE);
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      showAlert(CATCH_MESSAGE);
      throw new Error();
    });


const postPhoto = (body) =>
  fetch(POST_DATA_URL, {
    // запрос определяет бэкендер
    method: 'POST',
    // body: body,
    body,
  });

export {
  postPhoto,
  getPhotos
};

// для работы с сетью _ вкладка network
// попали в ветку истины
// IDLE - google
