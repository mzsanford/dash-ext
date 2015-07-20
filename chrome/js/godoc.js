
var $parent = $('.pkg'); // TODO: Where on the page the button goes
var $button = makeButtonElement('godoc');
var currentTarget = $parent.html(); // TODO: Get whatever addToDash function needs.

if (currentTarget !== undefined) {
  $parent.append($button);
  $button.click(function() {
    addToDash(currentTarget);
  });
}
