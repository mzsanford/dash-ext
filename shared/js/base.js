
function addToDash(repo, entry, event) {
  event.target.className += ' btn-sent';
  event.target.innerHTML = 'Added to Dash';
  event.preventDefault();

  dashURL = "dash-install://repo_name=" + encodeURIComponent(repo) + "&entry_name=" + encodeURIComponent(entry);
  // The dash-install:// scheme can also take a &version= parameter for versioned
  // docsets.
  document.location = dashURL;
}

function makeButtonElement(type, pkg) {
  var elem = document.createElement('a');
  elem.className = 'btn-add-to-dash btn-' + type;
  elem.dataset.package = pkg;
  elem.innerHTML = 'Add to Dash';
  return elem;
}

function getFirstElementWithSelector(base, selector) {
  return base.querySelector(selector);
}

function getAllElementsWithSelector(base, selector) {
  var results = base.querySelectorAll(selector);
  if (results == null) {
    return [];
  }
  return results;
}

function insertAfter(base, newNode) {
    base.parentNode.insertBefore(newNode, base.nextSibling);
}
