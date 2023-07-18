import { getPhotos } from './data.js';
import { PHOTOS } from './constants.js';
import { renderThumbnail } from './thumbnail.js';

import './form.js';
import './scale.js';

renderThumbnail(getPhotos(PHOTOS));
