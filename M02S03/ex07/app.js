document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.btn');
  const width = window.innerWidth;

  const clickHandler = () => {
    alert('butonul a fost apasat');
  };

  if (width >= 650) {
    button.addEventListener('click', clickHandler);
  }

  window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (width < 650) {
      button.removeEventListener('click', clickHandler);
    } else {
      button.addEventListener('click', clickHandler);
    }
  });
});
