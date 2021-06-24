// ex 1 si 2

var referenceNumber = prompt('Introdu un numar:');

for (let i = 0; i <= 100; i++) {
  console.log(i);

  if (i % referenceNumber !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${referenceNumber}.`);
}
