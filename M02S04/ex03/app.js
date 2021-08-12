const heroElement = document.querySelector('.hero');
const hero = {
  left: 0,
  top: 0,
  element: document.querySelector('.hero'),
};

const increments = 15;
const controls = document.querySelector('.controls');
const orthogonal = {
  x: 'left',
  y: 'top',
};
const speed = {
  forward: increments,
  back: -increments,
};

controls.addEventListener('click', (event) => {
  const target = event.target;

  if (target.nodeName !== 'BUTTON') {
    return;
  }

  const button = target;
  const axis = button.dataset.axis;
  const direction = button.dataset.direction;
  const heroDirection = orthogonal[axis];

  hero[heroDirection] = hero[heroDirection] + speed[direction];

  hero.element.style.transform = generateTransformValue(hero);
});

function generateTransformValue(character) {
  return `translate(${character.left}px, ${character.top}px)`;
}
