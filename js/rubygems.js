
var $parent = $('<div class="add-to-dash-floating"></div>');
var $button = $('<button class="btn-add-to-dash">Add to Dash</button>');
var currentTarget = $('.gem-name').html(); // TODO: Get whatever addToDash function needs.

if (currentTarget !== undefined) {
  $('body').append($parent);
  $parent.append($button);
  $button.click(function() {
    addToDash(currentTarget);
  });
}
