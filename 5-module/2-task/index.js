function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let textContainer = document.getElementById('text');

  button.onclick = function() {
    textContainer.hidden = !textContainer.hidden;
  }
}
