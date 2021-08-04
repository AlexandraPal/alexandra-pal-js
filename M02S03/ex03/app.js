const fragment = new DocumentFragment();
let counter = 0;
//crearea elementului p
const p = document.createElement('p');
fragment.append(p);

// crearea elementului counter
const counterElement = document.createElement('p');
fragment.append(counterElement);

document.body.append(fragment);

// add event listeners
const stage = document.querySelector('.stage');

stage.addEventListener('mouseover', () => {
  p.innerText = 'Mouseul este pe scena';

  counter++;
  counterElement.innerText = `Mouse-ul a fost pe scena de ${counter} ori.`;
});

stage.addEventListener('mouseout', () => {
  p.innerText = 'Mouse-ul nu este pe scena';
});
