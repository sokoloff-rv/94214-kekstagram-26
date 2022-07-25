import {
  getData
} from './api.js';
import {
  onFilterButtonsClick
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
const filterButtonsElements = document.querySelector('.img-filters__form');

const DELAY = 500;

getData(
  (posts) => {
    generateThumbs(posts);
    filterElement.classList.remove('img-filters--inactive');
    picturesElement.addEventListener('click', renderBigPicture(posts));
    filterButtonsElements.addEventListener('click', debounce(onFilterButtonsClick(posts), DELAY));
  },
  (errorText) => {
    showError(errorText);
  }
);
