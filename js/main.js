import { getPhotos } from './api.js';
import { setFilters } from './filter.js';

import './form.js';
getPhotos()
  .then((photos) => {
    setFilters(photos);
  });
