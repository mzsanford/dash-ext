
function addToDash(repo, entry) {
  dashURL = "dash-install://repo_name=" + encodeURIComponent(repo) + "&entry_name=" + encodeURIComponent(entry);
  // The dash-install:// scheme can also take a &version= parameter for versioned
  // docsets.
  document.location = dashURL;
}

function makeButtonElement(type, pkg) {
  return $('<a class="btn-add-to-dash btn-' + type + '" data-package="' + pkg + '">Add to Dash</a>');
}
