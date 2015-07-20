
var $parent = $('<div class="add-to-dash-floating"></div>');
var $button = makeButtonElement('rubygems');
var currentTarget = $('.gem-name').html(); // TODO: Get whatever addToDash function needs.

if (currentTarget !== undefined) {
  $('body').append($parent);
  $parent.append($button);
  $button.click(function() {
    addToDash(currentTarget);
  });
}
