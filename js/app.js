// Computer chooses random num between 1 and 100
// User guesses number between 1 and 100 ten times
// After each guess, player should be told if they are right/wrong, high/low
// Display previously guessed numbers
// Game ends after correct number or run out of turns
// When game is over, new game option is presented

// VARIABLE
let userGuess = document.getElementById("user-guess");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let displayGuessesUI = document.getElementById("guesses");
let displayMessageUI = document.getElementById("display-message");
let correctNum = Math.floor(Math.random() * 100) + 1;
let guessArray = [];
let guessCount = 0;

console.log(correctNum);

// on each submit guess, increase guess count
submitBtn.addEventListener("click", function() {
  // increase guess count to monitor turns
  guessCount++;

  // grab num value of guess, push into array
  userGuessNum = parseInt(userGuess.value);
  guessArray.push(userGuessNum);
  console.log(guessArray);
  displayGuessesUI.textContent = guessArray;
  userGuess.value = "";

  // compare user guess to correct number
  if (userGuessNum > correctNum) {
    console.log("Your guess is too high");
    displayMessageUI.textContent = "Your guess is too high";
    displayMessageUI.style.backgroundColor = "red";
  } else if (userGuessNum < correctNum) {
    console.log("Your guess is too low");
    displayMessageUI.textContent = "Your guess is too low";
    displayMessageUI.style.backgroundColor = "red";
  } else {
    console.log("You are correct!");
    displayMessageUI.textContent = "Correct! You win!";
    displayMessageUI.style.backgroundColor = "green";
    showResetBtn();
  }

  // use if statement to control game round
  if (guessCount === 9) {
    displayMessageUI.textContent = `No more guesses. The correct number was ${correctNum}. Game over!`;
    displayMessageUI.style.backgroundColor = "yellow";
    showResetBtn();
  }
});

resetBtn.addEventListener("click", resetGame);

function resetGame() {
  guessCount = 0;
  guessArray = [];
  submitBtn.classList.remove("hide");
  submitBtn.style.display = "inline-block";
  resetBtn.classList.remove("show");
  resetBtn.classList.add("hide");

  displayMessageUI.textContent = "";

  correctNum = Math.floor(Math.random() * 100) + 1;
  console.log(correctNum);
}

// Runs to hide submit btn and display play again btn
function showResetBtn() {
  submitBtn.classList.add("hide");
  resetBtn.classList.remove("hide");
  resetBtn.classList.add("show");
}
