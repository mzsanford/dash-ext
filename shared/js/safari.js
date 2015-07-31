
// Safari background functions
safari.self.addEventListener('message', function(msg) {
  if (msg.name == 'addToDash') {
    var button = getFirstElementWithSelector(document, '.btn-add-to-dash');
    if (button != null) {
      button.click();
    }
  }
}, false);
