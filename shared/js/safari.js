
console.log('Safari ext loaded');

document.addEventListener("contextmenu", handleContextMenu, false);

function handleContextMenu(event) {
  window.alert('Context fire');
}
