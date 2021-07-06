const person = {
  getName: function () {
    return 'Alexandra Pal';
  },

  getAge: function () {
    return 32;
  },
};

console.warn(`Afiseaza primul nume al persoanei folosind metoda getName()`);
//v1
const fullName = person.getName();
let firstName = fullName.split(' ')[0];
console.log(firstName);

//v2
let stringIndex = fullName.indexOf(' ');
firstName = fullName.slice(0, stringIndex);
console.log(firstName);
