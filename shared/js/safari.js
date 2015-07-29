
// Safari background functions
safari.self.addEventListener('message', function(msg) {
  if (msg.name == 'addToDash') {
    $('.btn-add-to-dash:first').click();
  }
}, false);
