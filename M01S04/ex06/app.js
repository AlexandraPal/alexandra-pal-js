const person = {
  name: 'Alexandra',
  surname: 'Pal',
  age: 33,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  'Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului',
);
for (let i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

console.warn('In mod similar, afiseaza skillurile care NU incep cu j');
const skillsLength = person.skills.length;

for (let i = 0; i < skillsLength; i++) {
  const skillName = person.skills[i];

  if (skillName[0] !== 'j') {
    console.log(skillName);
  }
}

console.warn(
  'Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy.',
);
const friendsLength = person.friends.length;

//v1
let message = 'Prietenii mei se numesc ';

for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];
  let punctuation = ', ';
  //friend.name === person.friends[i].name

  message += `${friend.name} ${friend.surname}`;

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  message += punctuation;
}
console.log(message);

//v2
message = 'Prietenii mei se numesc ';

for (let i = 0; i < friendsLength; i++) {
  const { name, surname } = person.friends[i];
  //friend.name friend.age friend.surname
  //name = friend.name
  // surname = friend.surname

  let punctuation = ', ';

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  message = `${message}${name} ${surname}${punctuation}`;
}

console.log(message);

console.warn(
  ' Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.',
);
let totalYears = 0;
//v1
for (let i = 0; i < friendsLength; i++) {
  if (person.friends[i].age >= 30) {
    totalYears += person.friends[i].age;
  }
}
console.log(totalYears);

//v2
totalYears = 0;
for (let i = 0; i < friendsLength; i++) {
  const { age } = person.friends[i];
  // age = person.friends[i].age;
  totalYears += age >= 30 ? age : 0;
}

console.log(totalYears);

console.warn('Folosind un for, afiseaza suma anilor de nastere a persoanelor.');
//v1
let sumBirthYears = 0;
for (i = 0; i < friendsLength; i++) {
  sumBirthYears += 2021 - person.friends[i].age;
}
console.log(sumBirthYears);

//v2
sumBirthYears = 0;
for (let i = 0; i < friendsLength; i++) {
  const { age } = person.friends[i];
  sumBirthYears += 2021 - age;
}
console.log(sumBirthYears);

console.warn(
  'Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani.',
);
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];
  const ageDiff = Math.abs(friend.age - person.age);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }
}

console.warn(
  'Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara.',
);
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];
  const ageDiff = Math.abs(friend.age - person.age);

  if (friend.age % 2 === 0) {
    continue;
  }

  console.log(
    `Intre ${person.name} si ${friend.name} este o diferena de ${ageDiff} ani.`,
  );
}

console.warn(
  'Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.',
);
