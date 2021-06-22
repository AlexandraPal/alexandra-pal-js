var person = {
  firstName: 'Alexandra',
  lastName: 'Pal',
  email: 'alexandra@gmail.com',
  birthYear: 1989,
  zipCode: 731720,
  pets: [
    {
      name: 'Rex',
      species: 'caine',
      age: 3,
    },

    {
      name: 'Pixie',
      species: 'pisica',
      age: 8,
    },

    {
      name: 'Sky',
      species: 'papagal',
      age: 6,
    },
  ],
};

var difference = 2021 - person.birthYear - person.pets[0].age;

console.warn(
  'Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName. ',
);

var petName = person.pets[0].name;

console.warn(
  'Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets.',
);
console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.');
console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  'Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”',
);
console.log(
  'Unul dintre cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[0].species +
    ' si are ' +
    person.pets[0].age +
    ' ani.',
);

console.warn(
  'Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.',
);
console.log(2021 - person.pets[2].age);

console.warn(
  'Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.',
);
console.log(difference);

console.warn(
  'Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.',
);
console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    difference +
    ' ani.',
);

console.warn(
  'Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)',
);

var prop01 = document.getElementById('prop01');

prop01.innerText =
  person.firstName +
  ', ' +
  person.pets[0].name +
  ', ' +
  person.pets[1].name +
  ', ' +
  person.pets[2].name +
  ' locuiesc toti in aceeasi casa.';

console.warn(
  'Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2',
);

var prop02 = document.getElementById('prop02');

prop02.innerText = person.pets[2].age - person.pets[0].age;

console.warn(
  'Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”',
);

var prop03 = document.getElementById('prop03');

prop03.innerText =
  'Ma numesc ' +
  person.firstName +
  ' ' +
  person.lastName +
  ', m-am nascut in ' +
  person.birthYear +
  ' si codul meu postal este: ' +
  person.zipCode +
  '.';

console.warn(
  'Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. ',
);

var prop04 = document.getElementById('prop04');

prop04.innerText =
  'Animalele mele s-au nascut in ' +
  (2021 - person.pets[0].age) +
  ', ' +
  (2021 - person.pets[1].age) +
  ', respectiv ' +
  (2021 - person.pets[2].age) +
  '.';
