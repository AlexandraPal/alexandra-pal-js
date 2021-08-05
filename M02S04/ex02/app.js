const box = document.querySelector('.box');
const controls = document.querySelectorAll('.controls').item(0);

controls.addEventListener('click', (event) => {
  const target = event.target;
  if (target.nodeName !== 'BUTTON' || target.value.length < 1) {
    // early return
    return;
  }

  const buttonElement = target;
  const colorValue = buttonElement.value;

  console.log(colorValue);
});
