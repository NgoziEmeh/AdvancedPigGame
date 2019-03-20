var scores, roundScore, activePlayer, winningScore;

init();

// DOM Manipulation for play button
document.querySelector('.btn-roll').addEventListener('click', function() {
  
  //1. Generate random number
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
