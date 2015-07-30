
if (window.location.hostname.match(/godoc/)) {
  var $parent = $('.container h1:first');
  if ($parent.size() <= 0) {
    $parent = $('#pkg-overview');
  }

  var currentTarget = $('.container code:first').html().replace(/import "(.*)"/, '$1');

  if (currentTarget !== undefined) {
    var $button = makeButtonElement('godoc', currentTarget);
    $parent.append($button);
    $button.click(function(e) {
      e.preventDefault();
      addToDash('Go Docsets', currentTarget);
    });
  }
}
