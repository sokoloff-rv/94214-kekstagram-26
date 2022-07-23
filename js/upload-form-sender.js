import {
  sendData
} from './api.js';
import {
  showError
} from './functions.js';
import {
  closeUploadForm
} from './upload-form-toggle.js';
import {
  showSuccessMessage
} from './upload-form-success.js';
import {
  showFailMessage
} from './upload-form-fail.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFormHashtag = uploadForm.querySelector('.text__hashtags');
const uploadFormButton = uploadForm.querySelector('.img-upload__submit');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'error-text'
});

const validationHashtag = (value) => {
  let isValid = true;
  if (value.length) {
    const hashtags = value.toLowerCase().split(' ');
    if (hashtags.length > 5) {
      isValid = false;
    }
    const uniqueHashtags = [];
    hashtags.forEach((hashtag) => {
      const correctValue = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
      if (!correctValue.test(hashtag)) {
        isValid = false;
      }
      if (uniqueHashtags.includes(hashtag)) {
        isValid = false;
      }
      uniqueHashtags.push(hashtag);
    });
  }
  return isValid;
};

pristine.addValidator(
  uploadFormHashtag,
  validationHashtag,
  'Некорректный формат. Хэштег должен начинаться с символа #, не содержать пробелы и спецсимволы, длина хэштега должна быть от 2 до 20 символов. Не более 5 хэштегов, разделенных пробелом.'
);

const blockFormButton = () => {
  uploadFormButton.disabled = false;
  uploadFormButton.textContent = 'Идет публикация...';
};

const unblockFormButton = () => {
  uploadFormButton.disabled = false;
  uploadFormButton.textContent = 'Опубликовать';
};

const onUploadFormSubmit = (event) => {
  event.preventDefault();
  if (pristine.validate()) {
    blockFormButton();
    sendData(
      () => {
        showSuccessMessage();
        unblockFormButton();
        closeUploadForm();
        uploadForm.reset();
      },
      (errorText) => {
        showFailMessage(errorText);
        unblockFormButton();
      },
      new FormData(event.target),
    );
  } else {
    showError('Форма заполнена некорректно!');
  }
};

export {
  onUploadFormSubmit
};
