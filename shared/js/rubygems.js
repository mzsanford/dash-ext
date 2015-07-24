
if (window.location.hostname.match(/rubygems/)) {
  var $parent = $('.page__heading');
  var currentTarget = $('.page__heading a').html(); // TODO: Get whatever addToDash function needs.

  if (currentTarget !== undefined) {
    var $button = makeButtonElement('rubygems', currentTarget);
    $parent.append($button);
    $button.click(function(e) {
      e.preventDefault();
      addToDash(currentTarget);
    });
  }
}
