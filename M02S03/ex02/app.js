$(() => {
  $(document.body).append(
    $('<p>', {
      text: 'Acesta este un mesaj de eroare',
    })
      .addClass('error')
      .prepend(
        $('<sup>', {
          text: 1,
        }),
      ),
  );
});
