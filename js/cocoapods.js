
var $parent = $('.pkg'); // TODO: Where on the page the button goes
var $button = $('<button class="btn-add-to-dash">Add to Dash</button>');
var currentTarget = $parent.html(); // TODO: Get whatever addToDash function needs.

if (currentTarget !== undefined) {
  $parent.append($button);
  $button.click(function() {
    addToDash(currentTarget);
  });
}
