'use strict';
// console.log(document.querySelector('.message').textContent);

// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number')
// );

let secretNumber = Math.trunc(Math.random()*20+1);
let score = 20;
let highscore = 0;

let displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if(!guess){
    displayMessage('No Number');
    // document.querySelector('.message').textContent = 'No Number';
  }
  else if(guess === secretNumber){
    displayMessage('Correct Number');
    // document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.cssText = 'width: 30rem; background-color: #90EE90';

    if(score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if(guess !== secretNumber){
      if (score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High' : 'Too Low';
        displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
        score--;
        document.querySelector('.score').textContent = score; 
      }
      else{
        displayMessage('You Lose');
        // document.querySelector('.message').textContent = 'You Lose';
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = 'red';
      }
  }
  // else if(guess > secretNumber){
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score; 
  //   }
  //   else{
  //     document.querySelector('.message').textContent = 'You Lose';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
  // else if(guess < secretNumber){
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score; 
  //   }
  //   else{
  //     document.querySelector('.message').textContent = 'You Lose';
  //     document.querySelector('.score').textContent = 0;
  //     document.querySelector('body').style.backgroundColor = 'red';
  //   }
  // }
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Number(document.querySelector('.guess').value);
  document.querySelector('.score').textContent = score;

  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.cssText = 'width: 15rem; background-color: #EEEEEE';
  document.querySelector('.guess').value = '';
})