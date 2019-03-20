var scores, roundScore, activePlayer, winningScore;

init();

// DOM Manipulation for play button
document.querySelector('.btn-roll').addEventListener('click', function() {
  
  //1. Generate random number
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  console.log(dice1, dice2);
  var dice = dice1 + dice2
  
  
  //2. Diplay the generated number(dice value)
  document.getElementById("dice1").style.display = 'block';
  document.getElementById("dice1").src = 'dice-' + dice1 + '.png';
  
  document.getElementById("dice2").style.display = 'block';
  document.getElementById("dice2").src = 'dice-' + dice2 + '.png';
