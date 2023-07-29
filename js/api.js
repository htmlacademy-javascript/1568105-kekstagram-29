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
    method: 'POST',
    body,
  });

export {
  postPhoto,
  getPhotos
};
