
function addToDash(repo, entry) {
  // TODO: Handle specific package versions
  dashURL = "dash-install://repo_name=" + encodeURIComponent(repo) + "&entry_name=" + encodeURIComponent(entry);
  document.location = dashURL;
}

function makeButtonElement(type, pkg) {
  return $('<a class="btn-add-to-dash btn-' + type + '" data-package="' + pkg + '">Add to Dash</a>');
}
