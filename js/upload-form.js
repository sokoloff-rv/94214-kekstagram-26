import {
  onUploadFormSubmit
} from './upload-form-validate.js';

const body = document.querySelector('body');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('#upload-select-image');
const uploadFormFileInput = uploadForm.querySelector('#upload-file');
const uploadFormClose = uploadForm.querySelector('#upload-cancel');
const uploadFormHashtag = uploadForm.querySelector('.text__hashtags');
const uploadFormComment = uploadForm.querySelector('.text__description');

const openUploadForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
  uploadFormClose.addEventListener('click', closeUploadForm);
  uploadForm.addEventListener('submit', onUploadFormSubmit);
};

function closeUploadForm() {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadFormClose.removeEventListener('click', closeUploadForm);
  uploadForm.removeEventListener('submit', onUploadFormSubmit);
  uploadForm.reset();
}

function onPopupEscKeydown(event) {
  if (event.key === 'Escape' && ![uploadFormComment, uploadFormHashtag].includes(document.activeElement)) {
    closeUploadForm();
  }
}

uploadFormFileInput.addEventListener('change', () => {
  openUploadForm();
});
