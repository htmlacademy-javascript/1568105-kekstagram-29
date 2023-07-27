import { getPhotos } from './api.js';
import { renderThumbnail } from './thumbnail.js';

import './form.js';
getPhotos()
  .then((photos) => {
    renderThumbnail(photos);
    // показать перламутровые пуговицы
  });

// удалить data.js, functions.js, tasks.js
// почистить константы
