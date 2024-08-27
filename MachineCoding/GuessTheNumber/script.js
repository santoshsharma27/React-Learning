const randomNumber = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let numGuess = 1;
const prevGuess = [];
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = Number(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 1) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else {
    displayMessage(`Number is too high`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.textContent += guess + " ";
  numGuess++;
  remaining.textContent = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.textContent = message;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  if (numGuess < 1) playGame = false;
}
function newGame() {
  playGame = true;
  numGuess = 1;
  prevGuess.length = 0;
}
