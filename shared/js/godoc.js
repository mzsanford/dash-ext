
if (window.location.hostname.match(/godoc/)) {
  var $parent = $('.container h1:first');
  if ($parent.size() <= 0) {
    $parent = $('#pkg-overview');
  }

  // TODO: Get whatever addToDash function needs.
  var currentTarget = $('.container code:first').html().replace(/import "(.*)"/, '$1');

  if (currentTarget !== undefined) {
    var $button = makeButtonElement('godoc', currentTarget);
    $parent.append($button);
    $button.click(function(e) {
      e.preventDefault();
      addToDash(currentTarget);
    });
  }
}
