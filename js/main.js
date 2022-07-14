import {
  generatePhotosData
} from './data.js';
import {
  generateThumbs
} from './thumbs.js';
import {
  getGallery
} from './gallery.js';

const pictures = generatePhotosData();
generateThumbs(pictures);

const picturesContainer = document.querySelector('.pictures');
picturesContainer.addEventListener('click', (event) => {
  event.preventDefault();
  const pictureId = event.target.dataset.id;
  const pictureData = pictures.find((picture) => picture.id === Number(pictureId));
  getGallery(pictureData);
});
