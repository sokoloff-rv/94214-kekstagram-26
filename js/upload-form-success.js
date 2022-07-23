const body = document.querySelector('body');
const successTemplate = document.querySelector('#success').content;

const showSuccessMessage = () => {
  const message = successTemplate.cloneNode(true);
  body.append(message);

  const successBlock = document.querySelector('.success');
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  successBlock.addEventListener('click', onSuccessBlockClick);
};

function closeSuccessMessage() {
  const successBlock = document.querySelector('.success');
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  successBlock.removeEventListener('click', closeSuccessMessage);
}

function onSuccessBlockClick(event) {
  if (event.target.matches('.success__button') || event.target.matches('.success')) {
    closeSuccessMessage();
  }
}

function onSuccessMessageEscKeydown(event) {
  if (event.key === 'Escape') {
    closeSuccessMessage();
  }
}

export {
  showSuccessMessage
};
