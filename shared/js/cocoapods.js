
if (window.location.hostname.match(/cocoapods/)) {
  // Result list pages.
  var refreshResultButtons = function() {
    $('.result').each(function() {
      var $result = $(this);
      var $podName = $result.attr('data-pod-name');
      var $header = $result.find('h3');
      if ($header.length > 0 && $result.find('.btn-add-to-dash').length == 0) {
        var $button = makeButtonElement('cocoapods', $podName);
        $button.click(function(e) {
          e.preventDefault();
          addToDash('Cocoa Docsets', $podName);
        });
        $header.append($button);

        $result.bind('DOMNodeInserted', function(event) {
          var $githubLink = $result.find('.github-link');
          $button.insertAfter($githubLink);
        });
      }
    });
  };

  // Full detail page
  if (window.location.pathname.startsWith('/pods/')) {
    var $podName = window.location.pathname.substr(6); // Substract "/pods/"
    var $button = makeButtonElement('cocoapods', $podName);
    $button.click(function(e) {
      e.preventDefault();
      addToDash('Cocoa Docsets', $podName);
    });
    var $githubLink = $('.github-link');
    $button.insertAfter($githubLink);
  } else {
    $('div.results').bind('DOMNodeRemoved', function(event) {
      refreshResultButtons();
    });
    refreshResultButtons();
  }
}
