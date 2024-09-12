const progressBar = document.getElementById("progress-bar");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const buttonContainer = document.querySelector(".button-container");
let progress = 0;
let intervalId = null;

/*
// Start button handler
startButton.addEventListener("click", () => {
  if (intervalId) return;

  intervalId = setInterval(() => {
    if (progress < 100) {
      progress += 0.5;
      progressBar.style.width = progress + "%";
    } else {
      clearInterval(intervalId); // Stop when progress reaches 100%
    }
  }, 30);

  startButton.disabled = true;
  stopButton.disabled = false;
});

// Stop button handler
stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  startButton.disabled = false;
  stopButton.disabled = true;
});

// Reset button handler
resetButton.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  progress = 0;
  progressBar.style.width = progress + "%";
  startButton.disabled = false;
  stopButton.disabled = true;
});

*/

buttonContainer.addEventListener("click", (e) => {
  if (e.target.id === "start") {
    if (intervalId) return;

    intervalId = setInterval(() => {
      if (progress < 100) {
        progress += 0.5;
        progressBar.style.width = progress + "%";
      } else {
        clearInterval(intervalId); // Stop when progress reaches 100%
      }
    }, 30);

    startButton.disabled = true;
    stopButton.disabled = false;
  }
  if (e.target.id === "stop") {
    clearInterval(intervalId);
    intervalId = null;
    progress = 0;
    progressBar.style.width = progress + "%";
    startButton.disabled = false;
    stopButton.disabled = true;
  }

  if (e.target.id === "reset") {
    clearInterval(intervalId);
    intervalId = null;
    progress = 0;
    progressBar.style.width = progress + "%";
    startButton.disabled = false;
    stopButton.disabled = true;
  }
});
