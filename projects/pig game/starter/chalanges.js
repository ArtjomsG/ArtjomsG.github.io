

var scores, roundscores, activePlayer, playGame;



init();

var lastDice;



document.querySelector('.btn-roll').addEventListener('click', function(){
    if(playGame) {
        //1.random number 
    var dice = Math.floor(Math.random() * 6) + 1;


    //2.Display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //3.Update roundscore IF roled number was not a 1.
    if (dice === 6 && lastDice === 6) {
        // Player loses score
        scores[activePlayer] = 0;
        document.querySelector('score-' + activePlayer).textContent = '0';
        nextPlayer();



    } else if (dice !== 1) {
        //Add score
        roundScore += dice;//roundScore = roundScore + dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

   
    }else {
        //Next player
        nextPlayer();
   
    }


    lastDice = dice;

    }
    
    

});



document.querySelector('.btn-hold').addEventListener('click', function(){

    if (playGame) {
    
        //1. Add current score to global score;
    scores[activePlayer] += roundScore; // scores[activePlayer] = scores[activePlayer] + roundScore;

    //2. Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    var input = document.querySelector('.final-score').value;
    
    // All the values, 0, null or "" are COERCED to false


    //3. Check if player win the game
    if(scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        playGame = false;
        
    } else {
        //Next player
      nextPlayer();

    }

    
    }
      



});



function nextPlayer() {
      //Next player
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // if (activePlayer === 0) { activePlayer = 1} else { activePlayer = 0};
      roundScore = 0;

      document.getElementById('current-0').textContent = 0;
      document.getElementById('current-1').textContent = 0;

      //document.querySelector('.player-0-panel').classList.remove('active');
      //document.querySelector('.player-1-panel').classList.add('active');

      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

      document.querySelector('.dice').style.display = 'none';

};


document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0,0];  //Player scores player 1 scores are = scores[0] and player 2 scores are = scores[1];
    roundScore = 0;
    activePlayer = 0; // there is two player player 1 = 0 and player 2 = 1;
    playGame = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    

}







//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;