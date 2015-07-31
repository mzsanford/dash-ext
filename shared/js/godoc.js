
if (window.location.hostname.match(/godoc/)) {
  var parent = getFirstElementWithSelector(document, '.container h1');
  if (parent == null) {
    parent = document.getElementById('pkg-overview');
  }

  if (parent != null) {
    var currentTarget = getFirstElementWithSelector(document, '.container code');
    if (currentTarget != null) {
      currentTarget = currentTarget.innerHTML.replace(/import "(.*)"/, '$1');

      var button = makeButtonElement('godoc', currentTarget);
      parent.appendChild(button);
      button.addEventListener('click', function(e) {
        addToDash('Go Docsets', currentTarget, e);
      });
    } else {
      // Could not find the import example
    }
  } else {
    // Could not find the package title
  }

}
