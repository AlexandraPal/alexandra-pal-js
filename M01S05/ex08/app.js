// Folosind codul de la exercitiul 08, numeste functia care ruleaza la click clickHandler
// si foloseste-i numele ca parametru al metodei addEventListener in locul celei anonime.

// Adauga un buton pe care scrie Elimina Evenimentul.

// La click pe acest buton nou, foloseste metoda removeEventListener al
// variabilei button si foloseste numele clickHandler ca parametru.

const clickerButton = document.getElementById('clicker');
const removeEventButton = document.getElementById('remove');
const clickHandler = function () {
  alert('Ai apasat butonul!');
};

clickerButton.addEventListener('click', clickHandler);

removeEventButton.addEventListener('click', function () {
  clickerButton.removeEventListener('click', clickHandler);
});

// Adauga un buton nou in document cu id-ul query si folosind addEventListener()
// ataseaza un eveniment care sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.

// Salveaza rezultatul metodei prompt intr-o variabila si afiseaza in consola folosind template strings: “Ai aa ani.”.

// Creaza un paragraf cu idul message si folosind getElementById() stocheaza elementul intr-o variabila,
// apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.
const queryButton = document.getElementById('query');
const paragaphElement = document.getElementById('message');

queryButton.addEventListener('click', function () {
  const age = prompt('Introdu varsta');
  const message = `Ai ${age} ani.`;

  console.log(message);
  paragaphElement.innerText = message;
});
