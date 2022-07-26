import {
  generateThumbs
} from './thumbs.js';

const filterButtonsElements = document.querySelectorAll('.img-filters__button');
const filterDefaultElement = document.querySelector('#filter-default');
const filterRandomElement = document.querySelector('#filter-random');
const filterDiscussedElement = document.querySelector('#filter-discussed');

const NUMBER_OF_RANDOM_PHOTOS = 10;

const clearThumbs = () => {
  const picturesElements = document.querySelectorAll('.picture');
  picturesElements.forEach((picture) => {
    picture.remove();
  });
};

const clearFilterButtonClass = () => {
  filterButtonsElements.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

const viewDefaultPhotos = (photos) => {
  clearFilterButtonClass();
  filterDefaultElement.classList.add('img-filters__button--active');
  clearThumbs();
  generateThumbs(photos);
};

const viewRandomPhotos = (photos) => {
  clearFilterButtonClass();
  filterRandomElement.classList.add('img-filters__button--active');
  clearThumbs();
  const randomPhotos = photos.slice().sort(() => Math.random() - 0.5).slice(0, NUMBER_OF_RANDOM_PHOTOS);
  generateThumbs(randomPhotos);
};

const viewDiscussedPhotos = (photos) => {
  clearFilterButtonClass();
  filterDiscussedElement.classList.add('img-filters__button--active');
  clearThumbs();
  const discussedPhotos = photos.slice().sort((a, b) => b.comments.length - a.comments.length);
  generateThumbs(discussedPhotos);
};

const onFilterButtonsClick = (photos) => (evt) => {
  if (evt.target.matches('#filter-default')) {
    viewDefaultPhotos(photos);
  } else if (evt.target.matches('#filter-random')) {
    viewRandomPhotos(photos);
  } else if (evt.target.matches('#filter-discussed')) {
    viewDiscussedPhotos(photos);
  }
};

export {
  onFilterButtonsClick
};
