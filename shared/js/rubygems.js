
if (window.location.hostname.match(/rubygems/)) {
  var parent = getFirstElementWithSelector(document, '.page__heading');
  var currentTarget = getFirstElementWithSelector(document, '.page__heading a');

  if (currentTarget != null) {
    currentTarget = currentTarget.innerHTML;
    var button = makeButtonElement('rubygems', currentTarget);
    parent.appendChild(button);
    button.addEventListener('click', function(e) {
      addToDash('Ruby Docsets', currentTarget, e);
    });
  }
}
