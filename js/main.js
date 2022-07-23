import {
  generateThumbs
} from './thumbs.js';
import {
  renderBigPicture
} from './big-picture.js';
import './upload-form.js';
import {
  getData
} from './api.js';
import {
  showError
} from './functions.js';

getData(
  (posts) => {
    generateThumbs(posts);
    document.querySelector('.pictures').addEventListener('click', renderBigPicture(posts));
  },
  (errorText) => {
    showError(errorText);
  }
);
