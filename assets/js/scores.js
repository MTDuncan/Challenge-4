function printHighscores() {
  var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

  highscores.sort(function (a, b) {
    return b.score - a.score;
  });

  var highscoresList = '';

  for (var i = 0; i < highscores.length; i += 1) {
    highscoresList += '<li class="highscore-item">' +
      '<span class="highscore-initials">' + highscores[i].initials + '</span>' +
      '<span class="highscore-score">' + highscores[i].score + '</span>' +
      '</li>';
  }

  var highscoresEl = document.getElementById('highscores');
  highscoresEl.innerHTML = highscoresList;
}

function clearHighscores() {
  window.localStorage.removeItem('highscores');
  window.location.reload();
}

document.getElementById('clear').onclick = clearHighscores;

printHighscores();
