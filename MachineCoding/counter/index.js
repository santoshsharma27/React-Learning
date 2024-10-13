const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const changeBy = document.getElementById("changeBy");
const reset = document.getElementById("reset");
const value = document.querySelector(".value");

increment.addEventListener("click", () => {
  value.textContent = parseInt(value.textContent) + parseInt(changeBy.value);
});

decrement.addEventListener("click", () => {
  value.textContent = parseInt(value.textContent) - parseInt(changeBy.value);
});

reset.addEventListener("click", () => {
  value.textContent = 0;
});

changeBy.addEventListener("change", () => {
  const changeByValue = parseInt(changeBy.value);

  if (isNaN(changeByValue) || changeByValue < 0) {
    changeBy.value = 1; // Reset to 1 if invalid or negative
  }
});
