var scores, roundScore, activePlayer, winningScore;

init();

// DOM Manipulation for play button
document.querySelector('.btn-roll').addEventListener('click', function() {
  
  //1. Generate random number
