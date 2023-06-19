// Generate random initial
function getRandomInitial() {
  var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

// Set avatar initials
document.addEventListener('DOMContentLoaded', function () {
  var avatarElements = document.getElementsByClassName('navbar-avatar');
  for (var i = 0; i < avatarElements.length; i++) {
    var initial = getRandomInitial();
    avatarElements[i].textContent = initial;
  }
});