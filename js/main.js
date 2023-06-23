import { getPhotos } from './data.js';
import { PHOTOS } from './constants.js';
import { renderThumbnail } from './thumbnail.js';

renderThumbnail(getPhotos(PHOTOS));
