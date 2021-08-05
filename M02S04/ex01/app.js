const box = document.querySelector('.box');
const applyButton = document.getElementsByClassName('apply-button')[0];
const animationClass = 'animate-class';

setTimeout(() => {
  box.classList.add(animationClass);

  // callback hell
  setTimeout(() => {
    box.classList.remove(animationClass);
  }, 2000);
}, 2000);

applyButton.addEventListener('click', (event) => {
  const buttonElement = event.currentTarget;

  if (box.classList.contains(animationClass)) {
    box.classList.remove(animationClass);
    buttonElement.textContent = 'Elimina';
  } else {
    box.classList.add(animationClass);
    buttonElement.textContent = 'Aplica';
  }
});
