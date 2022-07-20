const imageElement = document.querySelector('.img-upload__preview img');
const scaleInputElement = document.querySelector('.scale__control--value');

const MIN_SCALE_IMAGE = 0.25;
const MAX_SCALE_IMAGE = 1;
const SCALE_IMAGE_STEP = 0.25;

const zoomIn = () => {
  let scaleValue = Number(scaleInputElement.value.replace('%', '')) / 100;
  if (scaleValue > MIN_SCALE_IMAGE) {
    scaleValue -= SCALE_IMAGE_STEP;
  }
  scaleInputElement.value = `${(scaleValue * 100).toFixed(0)}%`;
  imageElement.style.transform = `scale(${scaleValue})`;
};

const zoomOut = () => {
  let scaleValue = Number(scaleInputElement.value.replace('%', '')) / 100;
  if (scaleValue < MAX_SCALE_IMAGE) {
    scaleValue += SCALE_IMAGE_STEP;
  }
  scaleInputElement.value = `${(scaleValue * 100).toFixed(0)}%`;
  imageElement.style.transform = `scale(${scaleValue})`;
};

export {
  zoomIn,
  zoomOut
};
