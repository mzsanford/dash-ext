
if (window.location.hostname.match(/cocoapods/)) {
  // Result list pages.
  var refreshResultButtons = function() {
    var expandedResults = getAllElementsWithSelector(document, '.result.is-expanded');
    for (var i = 0; i < expandedResults.length; i++) {
      var result = expandedResults[i];
      var podName = result.dataset.podName;
      var headers = result.getElementsByTagName('h3');
      var button = getFirstElementWithSelector(result, '.btn-add-to-dash');
      if (button == null &&
          podName != null &&
          headers != null && headers.length >= 1) {
        var header = headers[0];
        var button = makeButtonElement('cocoapods', podName);
        button.addEventListener('click', function(e) {
          addToDash('Cocoa Docsets', podName, e);
        });
        header.appendChild(button);

        result.addEventListener('DOMNodeInserted', function(e) {
          var githubLink = getFirstElementWithSelector(result, '.github-link');
          insertAfter(githubLink, button);
        });
      }
    }
  };

  // Full detail page
  if (window.location.pathname.startsWith('/pods/')) {
    var podName = window.location.pathname.substr(6); // Substract "/pods/"
    var button = makeButtonElement('cocoapods', podName);
    button.addEventListener('click', function(e) {
      addToDash('Cocoa Docsets', podName, e);
    });
    var githubLink = getFirstElementWithSelector(document, '.github-link');
    if (githubLink != null) {
      insertAfter(githubLink, button);
    }
  } else {
    var results = getFirstElementWithSelector(document, 'div.results');
    if (results != null) {
      results.addEventListener('DOMNodeRemoved', function(e) {
        refreshResultButtons();
      });
    }
    refreshResultButtons();
  }
}
