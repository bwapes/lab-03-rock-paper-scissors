// import functions and grab DOM elements
import { getRandomThrow, checkResult } from './gameUtils.js';

const startGame = document.querySelector('.startGame');
const theGame = document.querySelector('.theGame');
const shootButton = document.querySelector('.shootButton');
const resultSpan = document.querySelector('.result');
const simulate = document.querySelector('.simulate');
const resetButton = document.querySelector('.resetButton');
const countWinElement = document.querySelector('.wins');
const countLossElement = document.querySelector('.losses');
const countDrawElement = document.querySelector('.draw');
const countGamesElement = document.querySelector('.numberOfPlays');
const countReset = document.querySelector('.countReset');
const rpsButtons = document.querySelector('.buttons');

// initialize state
let computerDraw = 0;
let playersDraw = 0;
let countWins = 0;
let countLoss = 0;
let countDraw = 0;
let numberOfGames = 0;
let resetCounter = 0;


// set event listeners to update state and DOM 
startGame.addEventListener('click', () => {
    startGame.classList.add('hidden');
    theGame.classList.remove('hidden');
    computerDraw = getRandomThrow();
    
});

//game play button
shootButton.addEventListener('click', () => {
    numberOfGames++;
    rpsButtons.classList.add('hidden');
    // gather players choice and compare to computer
    const checkRadio = document.querySelector('input:checked');
    playersDraw = Number(checkRadio.value);
    const matchResult = checkResult(playersDraw, computerDraw);
    
    //show gif and take it away
    simulate.classList.remove('hidden');
    setTimeout(function() {
        simulate.classList.add('hidden');
    }, 1500);
    
    //determine who won
    setTimeout(function() {
        resultSpan.classList.remove('hidden');
        if (matchResult === 'draw') {
            resultSpan.textContent = 'We tied, lets go again';
            countDraw++;
        }
        if (matchResult === 'lose') {
            resultSpan.textContent = 'You lost, don\'t worry though we can play again';
            countLoss++;
        }
        if (matchResult === 'win') {
            resultSpan.textContent = 'You Won?! Alright let\'s go again';
            countWins++;
        }
        //update counters
        countWinElement.textContent = `You have won ${countWins} games`;
        countLossElement.textContent = `You have lost ${countLoss} games`;
        countDrawElement.textContent = `You have tied ${countDraw} games`;
        countGamesElement.textContent = `You have played ${numberOfGames} games`;

    }, 1500);
    
    //reset button appears and take away the shoot button
    resetButton.classList.remove('hidden');
    shootButton.classList.add('hidden');
    
});

//reset the game to be logical for the user, keep needed elements present though
resetButton.addEventListener('click', () => {
    rpsButtons.classList.remove('hidden');
    resetCounter ++;
    resultSpan.classList.add('hidden');
    resetButton.classList.add('hidden');
    computerDraw = getRandomThrow();
    shootButton.classList.remove('hidden');
    countReset.textContent = `You have reset the game ${resetCounter}`;
});

