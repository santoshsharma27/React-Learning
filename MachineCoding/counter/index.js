const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const changeBy = document.getElementById("changeBy");
const reset = document.getElementById("reset");
const value = document.querySelector(".value");

const getValue = () => Number(value.textContent) || 0;
const getChangeBy = () => Number(changeBy.value) || 1;

increment.addEventListener("click", () => {
  value.textContent = getValue() + getChangeBy();
});

decrement.addEventListener("click", () => {
  value.textContent = getValue() - getChangeBy();
});

reset.addEventListener("click", () => {
  value.textContent = 0;
});

changeBy.addEventListener("change", () => {
  if (getChangeBy() < 1) {
    changeBy.value = 1;
  }
});
