var value = prompt('Introdu un numar');
var paragraphElement = document.getElementById('message');
var message = '';
var referenceNumber = 20;

value = Number(value);

if (isNaN(value)) {
  message = 'Nu ai introdus un numar.';
} else {
  if (value === referenceNumber) {
    message = `Numarul este egal cu ${referenceNumber}.`;
  } else if (value > referenceNumber) {
    message = `Numarul ${value} este mai mare decat ${referenceNumber}..`;
  } else {
    message = `Numarul ${value} este mai mic decat ${referenceNumber}..`;
  }
}

paragraphElement.innerText = message;
