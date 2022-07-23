const body = document.querySelector('body');
const errorTemplate = document.querySelector('#error').content;

const showErrorMessage = () => {
  const message = errorTemplate.cloneNode(true);
  body.append(message);

  const errorBlock = document.querySelector('.error');
  document.addEventListener('keydown', onErrorMessageEscKeydown);
  errorBlock.addEventListener('click', onerrorBlockClick);
};

function closeErrorMessage() {
  const errorBlock = document.querySelector('.error');
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
  errorBlock.removeEventListener('click', closeErrorMessage);
}

function onerrorBlockClick(event) {
  if (event.target.matches('.error__button') || event.target.matches('.error')) {
    closeErrorMessage();
  }
}

function onErrorMessageEscKeydown(event) {
  if (event.key === 'Escape') {
    closeErrorMessage();
  }
}

export {
  showErrorMessage
};
