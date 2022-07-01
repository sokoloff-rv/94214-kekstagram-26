import {
  generatePhotosData
} from './data.js';
import {
  generateThumbs
} from './thumbs.js';

const pictures = generatePhotosData();
generateThumbs(pictures);
