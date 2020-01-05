// Guess a number in the range of 1 to 10
// Computer has to randomly pick a number each round
// Grab the user input and check to see if number is in the array
// Reset correct number

// Variables
let userGuessInput = document.getElementById("user-guess");
let submitBtn = document.getElementById("submitBtn");
let correctNumber;

// Event Listener
submitBtn.addEventListener("click", gameRound);

// Functions
function gameRound(e) {
  // prevent reload of page
  e.preventDefault();
  // generate CPU number
  correctNumber = getRandomIntInclusive(0, 10);
  console.log(correctNumber);
  // grab user number
  userGuess = userGuessInput.value;
  console.log(userGuess);

  if (userGuess !== correctNumber) {
    console.log("You are wrong.");
  } else {
    console.log("You are right!");
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
