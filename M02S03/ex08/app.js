$(() => {
  const message1Class = 'message1';
  let $paragraph1 = $(`.${message1Class}`);

  const $stage = $('.stage')
    .on('mouseover', function () {
      if ($paragraph1.length < 1) {
        $paragraph1 = $('<p>', {
          class: message1Class,
        }).insertAfter($stage);
      }

      $paragraph1.text('Mouseul este pe scena');
    })
    .on('mouseout', function () {
      $paragraph1.text('Mouseul nu se afla pe scena');
    });
});
