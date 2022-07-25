import {
  getData
} from './api.js';
import {
  viewDefaultPhotos,
  viewRandomPhotos,
  viewDiscussedPhotos
} from './filter.js';
import {
  showError,
  debounce
} from './functions.js';
import {
  generateThumbs
} from './thumbs.js';
import {
  renderBigPicture
} from './big-picture.js';
import './upload-form-toggle.js';

const filterElement = document.querySelector('.img-filters');
const picturesElement = document.querySelector('.pictures');
const filterDefaultElement = document.querySelector('#filter-default');
const filterRandomElement = document.querySelector('#filter-random');
const filterDiscussedElement = document.querySelector('#filter-discussed');

const DELAY = 500;

getData(
  (posts) => {
    generateThumbs(posts);
    filterElement.classList.remove('img-filters--inactive');
    picturesElement.addEventListener('click', renderBigPicture(posts));
    filterDefaultElement.addEventListener('click', debounce(viewDefaultPhotos(posts), DELAY));
    filterRandomElement.addEventListener('click', debounce(viewRandomPhotos(posts), DELAY));
    filterDiscussedElement.addEventListener('click', debounce(viewDiscussedPhotos(posts), DELAY));
  },
  (errorText) => {
    showError(errorText);
  }
);
