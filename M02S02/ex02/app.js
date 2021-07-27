const $form = $('#personForm');
const $skillInput = $('#skill');
const personContainerClass = 'person-container';
const skillsUlClass = 'skills-ul';

const renderPerson = (data) => {
  let $personContainer = $(`.${personContainerClass}`);

  if ($personContainer.length < 1) {
    $personContainer = $('<section>', {
      class: personContainerClass,
    }).appendTo($('body'));
  }

  $personContainer.empty().append(
    $('<h1>', {
      text: `${data.name} ${data.surname} (${data.age})`,
    }),
  );

  const $skillsUl = $('<ul>');

  data.skills.forEach((skillName) => {
    const $skillLi = $('<li>', {
      text: skillName,
    }).appendTo($skillsUl);
  });

  $personContainer.append($skillsUl);
};

const renderSkillsUl = (skill) => {
  let $skillsUl = $(`.${skillsUlClass}`);

  if ($skillsUl.length < 1) {
    $skillsUl = $('<ul>', {
      class: skillsUlClass,
    });
  }

  const $skillLi = $('<li>', {
    text: skill,
  });

  $skillsUl.on('click', '.delete-skill', function () {
    $(this).parent().remove();
  });

  const $proxyInput = $('<input>', {
    type: 'hidden',
    value: skill,
    name: `skill-${skill}`,
  });
  $skillLi.append($proxyInput);

  const $deleteSkillButton = $('<button>', {
    type: 'button',
    text: 'Delete',
    class: 'delete-skill',
  });

  $skillLi.append($deleteSkillButton);

  $skillsUl.append($skillLi);

  return $skillsUl;
};

const normalizeData = (data) => {
  return data.reduce((personData, inputField) => {
    const { name, value } = inputField;

    if (name.startsWith('skill-')) {
      personData.skills = personData.skills || [];

      personData.skills.push(value);

      return personData;
    }

    personData[name] = value;

    return personData;
  }, {});
};

$form.on('submit', function (event) {
  event.preventDefault();
  const data = $(this).serializeArray();

  renderPerson(normalizeData(data));
});

$skillInput.next().on('click', function () {
  const $input = $(this).prev();
  const value = $input.val();

  if (value.length < 1) {
    return;
  }

  const $skillsUl = renderSkillsUl(value);
  $skillsUl.insertAfter($input.parent());

  $input.val('');
});
