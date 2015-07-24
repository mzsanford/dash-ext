
function addToDash(url_or_package) {
  // TODO: Call whatever Dash gives me here.
  alert('Added to Dash: ' + url_or_package);
}

function makeButtonElement(type, pkg) {
  return $('<a class="btn-add-to-dash btn-' + type + '" data-package="' + pkg + '">Add to Dash</a>');
}
