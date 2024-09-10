const userInput = document.querySelector(".user-input");
const form = document.querySelector("form");
const result = document.querySelector(".result");
const allGuesses = document.querySelector(".all-guesses");
const submitBtn = document.querySelector(".submit-btn");
const startGameBtn = document.querySelector(".start-game");

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);
const allGuessesArray = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInputValue = parseInt(userInput.value);

  // When there is no input
  if (!userInputValue) {
    displayMessage("⛔️ No number!");
  }
  // When player wins
  else if (userInputValue === randomNumber) {
    displayMessage("🎉 Correct Number!");
    submitBtn.disabled = true;
  }
  // When guess is wrong
  else if (userInputValue !== randomNumber) {
    displayMessage(
      userInputValue > randomNumber ? "📈 Too high!" : "📉 Too low!"
    );
  }

  if (userInput.value !== "") {
    allGuessesArray.push(userInputValue);
  }

  allGuesses.textContent = `Your guesses: ${allGuessesArray}`;
  form.reset();
});

function displayMessage(message) {
  result.textContent = message;
}

startGameBtn.addEventListener("click", () => {
  allGuesses.textContent = "";
  displayMessage("");
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
});
