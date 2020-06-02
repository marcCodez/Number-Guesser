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
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const UIgameWrapper = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');

// Assign UI min and max
// createTextNode for new elements, textContent for already existing elements (change content)
UIminNum.textContent = min;
UImaxNum.textContent = max;


// Since the play-again class is added after the page loads
//We need to use event delegation, by adding the listener to a parent and search for the target which is play-again
// mousedown instead of click so we are able to see the message
// as soon as we release click will automatically play again
// Play again event listener
UIgameWrapper.addEventListener('mousedown', function(e){
if (e.target.className === 'play-again'){
    // reload the page
    window.location.reload();
}
});

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
// Game over - won

// Disable input
// UIguessInput.disabled = true;
// // Change border color
// UIguessInput.style.borderColor = 'green';
// // Set message
// setMessage(`${winningNum} is correct, YOU WIN!`, 'green');

//We can replace the above commented code with:
gameOver(true, `${winningNum} is correct, YOU WIN!`)
} else {
    // Wrong Number - guessesLeft = guessesLeft - 1
guessesLeft -= 1;

if (guessesLeft === 0){
    // Game over - lost

    gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

//     // Disable input
// UIguessInput.disabled = true;
// // Change border color ddddd 
// UIguessInput.style.borderColor = 'red';
// // Set message
// setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');
} else {
    // Game continues - answer wrong

    // Change border color
UIguessInput.style.borderColor = 'red';

// Clear Input
UIguessInput.value = '';

// Tell user its the wrong number
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
}
}
});

// Game over - a function to remove the repeat code
function gameOver(won, msg){
let color;
// ternary operator
won === true ? color = 'green' : color = 'red';
// Disable input
UIguessInput.disabled = true;
// Change border color
UIguessInput.style.borderColor = color;
// Set text color
UImessage.style.color = color;
// Set message
setMessage(msg);

// Play again?
UIguessBtn.value = 'Play Again';
//append the play-again class
UIguessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
    // if we did * 10 it would give us a number between 0 - 9
    // so we use max-min+1 plus the min
    //Math.floor to run down
 //Returning it will assign it to winningNum
return Math.floor(Math.random()*(max-min+1)+min);

}

// Set message
function setMessage(msg, color) {
UImessage.style.color = color;
UImessage.textContent = msg;
}