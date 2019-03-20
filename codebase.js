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
  
  
  //3. Show dice values as scores in Current score area
  if(dice1 !== 1 & dice2 !== 1){
    //Add to current score
    roundScore += dice1 + dice2;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  }else {  
    //Give to next player to play
    nextPlayer();
    
    
 }
  
});  


// DOM Manipulation for Add Score botton
document.querySelector('.btn-hold').addEventListener('click', function(){
  //Add current score to main score
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] += roundScore;
  
  //Give next player to play
  function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    
    roundScore = 0;
    
     document.getElementById('current-0').textContent = 0;
     document.getElementById('current-1').textContent = 0;
