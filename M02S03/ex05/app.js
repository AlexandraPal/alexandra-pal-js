const showMesage = (message) => {
  const p = document.createElement('p');
  p.innerText = message;

  document.body.append(p);
};
const initialWidth = window.innerWidth;

showMesage(`Latimea ferestrei este: ${initialWidth}`);

window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;
  showMesage(`Latimea ferestrei este: ${currentWidth}`);

  if (currentWidth !== initialWidth) {
    showMesage(`Fereastra si-a schimbat latimea`);
  }

  initialWidth = currentWidth;
});
