// VARIABLE
let userGuess = document.getElementById("user-guess");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let displayGuessesUI = document.getElementById("guesses");
let displayMessageUI = document.getElementById("display-message");
let correctNum = Math.floor(Math.random() * 100) + 1;
let guessArray = [];
let guessCount = 0;

// on each submit guess, increase guess count
submitBtn.addEventListener("click", function() {
  // increase guess count to monitor turns
  guessCount++;

  // grab num value of guess, push into array
  userGuessNum = parseInt(userGuess.value);
  guessArray.push(userGuessNum);
  displayGuessesUI.textContent = guessArray;
  userGuess.value = "";

  // compare user guess to correct number
  if (userGuessNum > correctNum) {
    displayMessageUI.textContent = "Your guess is too high";
    displayMessageUI.style.backgroundColor = "red";
  } else if (userGuessNum < correctNum) {
    displayMessageUI.textContent = "Your guess is too low";
    displayMessageUI.style.backgroundColor = "red";
  } else {
    displayMessageUI.textContent = "Correct! You win!";
    displayMessageUI.style.backgroundColor = "green";
    showResetBtn();
  }

  // use if statement to control game round
  if (guessCount === 10) {
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
  displayGuessesUI.textContent = "";

  correctNum = Math.floor(Math.random() * 100) + 1;
}

// Runs to hide submit btn and display play again btn
function showResetBtn() {
  submitBtn.style.display = "none";
  resetBtn.classList.remove("hide");
  resetBtn.classList.add("show");
}
