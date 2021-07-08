const person = {
  getName: function () {
    return 'Alexandra Pal';
  },

  getAge: function () {
    return 31;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.warn(
  'Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”',
);
const personName = accessor('Name');
const personFirstName = personName.split(' ')[0];

console.log(`Eu sunt ${personFirstName}.`);
