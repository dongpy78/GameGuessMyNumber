'use strict';

let serrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No number!');
  } else if (guess === serrectNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = serrectNumber;

    document.querySelector('body').style.backgroundColor = '#1098ad';
    document.querySelector('.number').style.width = '15rem';

    if (score > hightscore) {
      hightscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== serrectNumber) {
    if (score > 1) {
      displayMessage(guess > serrectNumber ? 'Too height!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  serrectNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Start guessing....');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '12rem';
});
