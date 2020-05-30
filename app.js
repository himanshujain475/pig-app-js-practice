/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;

activePlayer = 0; //1 for second

document.querySelector('.dice').style.display = 'none';

//one more ways to seclect Id then query selector
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
//we use id to select here
// two ways to change the value
//way no-1
//document.querySelector('#current-' + activePlayer).textContent = dice;

// way no-2
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//difference between two is that inner html consider html while test context as a strong so it will inclide <em> there.

//To read the value
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

//use the query selector to change the css
//note in this for class selector we use .

// function btnRoll(){
//     console.log
// }
// //event handler

// document.querySelector('.btn-roll').addEventListener('click',btnRoll);

//second way annonymous function
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1.Random number
    var diceNo = Math.floor(Math.random() * 6) + 1;
    //2.display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + diceNo + '.png';
    //3.
});