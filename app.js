/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values - create variables
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');

// Assign UI min and max
// createTextNode for new elements, textContent for already existing elements (change content)
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Listen for guess
UIguessBtn.addEventListener('click', function(){
    // wat we input is a string so we change it to an integer with parseInt
    let guess = parseInt(UIguessInput.value);

    // Validate input
if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
}

// check if won
if(guess === winningNum){
// Disable input
UIguessInput.disabled = true;
// Change border color
UIguessInput.style.borderColor = 'green';
// Set message
setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
} else {

}
});

// Set message
function setMessage(msg, color) {
UImessage.style.color = color;
UImessage.textContent = msg;
}