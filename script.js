'use strict';

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const btnNewEl = document.querySelector('.btn--new');
const diceEl = document.querySelector('.dice');


let scores,playing,activePlayer,currentScore;
const newgame = function(){
     playing = true;
    diceEl.classList.add('hidden');
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    scores = [0,0];
     activePlayer = 0;
     currentScore = 0;
     player0EL.classList.add('player--active');
     player1EL.classList.remove('player--active');
}

newgame();
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}
//function roll dice
btnRollEl.addEventListener('click',function(){
    if(playing){
        //renarating a random dice roll
     const dice = Math.trunc(Math.random() * 6) + 1;
     //display dice roll
     diceEl.classList.remove('hidden');
     diceEl.src = `dice-${dice}.png`;
   //check for roll equal 1 : if true switch player
   if(dice !== 1){
    //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
   }else{
    //switch player
       switchPlayer();
   }

    }
})



//function hold

btnHoldEl.addEventListener('click',function(){
    if(playing){
        scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100){
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
       playing = false;
    }else{
        switchPlayer();
    }
    }
})

//function reset the game

btnNewEl.addEventListener('click',newgame);