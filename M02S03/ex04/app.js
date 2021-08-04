const paragraphClass = 'message-paragraph';

const createElement = (elementType = 'p', cssClass = '') => {
  const element = document.createElement(elementType);
  element.classList.ass(cssClass);

  return element;
};

const showMessage = (message) => {
  // verific daca paragraful este acolo
  //daca este, scrie-mi-l
  let p = document.querySelector(`.${paragraphClass}`);
  if (p === null) {
    p = createElement('p', paragraphClass);

    document.body.append(p);
  }

  p.innerText = message;
};

const imageElement = document.querySelector('.image');
imageElement.addEventListener('load', () => {
  showMessage('Imaginea s-a incarcat');
});
