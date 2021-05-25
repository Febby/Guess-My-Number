'use strict';

const gameBody = document.querySelector('body');
const messageString = document.querySelector('.message');
const guessSection = document.querySelector('.guess');
const numberSection = document.querySelector('.number');
const scoreSection = document.querySelector('.score');
const buttonCheck = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// console.log(messageString.textContent);

// messageString.textContent = `🎉Correct Number`;
// numberSection.textContent = 23;
// scoreSection.textContent = 99;
// guessSection.value = 33;

// console.log(guessSection);

// console.log(guessSection.value);

// define the score here

let score = 20;

//Generate secret number between 1 - 20
// Math random generates random decimal number 0 - 1
// math trunc remove fractional units

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// Check score
const checkScore = function () {
  if (score > 1) {
    score--;
    scoreSection.textContent = score;
  } else {
    messageString.textContent = `😢 Game Over!`;
    gameBody.style.backgroundColor = 'red';
    scoreSection.textContent = 0;
  }
};

// Check number
const checkNumber = function () {
  const guess = Number(guessSection.value);
  console.log(guess, typeof guess);

  //check if the value is empty
  if (!guess) {
    messageString.textContent = `⛔ You didn't input any number`;
  } else if (guess === secretNumber) {
    messageString.textContent = `🎉 Correct Number`;
    numberSection.textContent = secretNumber;
    gameBody.style.backgroundColor = 'green';
    numberSection.style.width = '30rem';
  } else if (guess > secretNumber) {
    messageString.textContent = `📈 Too high`;
    checkScore();
  } else if (guess < secretNumber) {
    messageString.textContent = `📉 Too low`;
    checkScore();
  }

  //   messageString.textContent = `You entered ${guessSection.value} 🎉Correct Number`;
};

//reset the game
const resetGame = function () {
  console.log('game resetted');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  console.log('Game restarted, secret number: ' + secretNumber);
  messageString.textContent = `Start guessing...!`;
  scoreSection.textContent = score;
  numberSection.textContent = '?';
  guessSection.value = '';
  gameBody.style.backgroundColor = '#222';
  numberSection.style.width = '15rem';
};

buttonCheck.addEventListener('click', checkNumber);

againBtn.addEventListener('click', resetGame);
