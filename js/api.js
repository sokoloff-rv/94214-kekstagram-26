const getData = (onSuccess, onFail) => {
  fetch('https://27.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((posts) => {
      onSuccess(posts);
    })
    .catch(() => {
      onFail('При загрузке данных с сервера произошла ошибка!');
    });
};

export {
  getData
};
