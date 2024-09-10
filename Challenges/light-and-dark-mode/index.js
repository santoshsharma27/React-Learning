const fullDarkModeCheckbox = document.getElementById("full-dark-mode");
const containedDarkModeCheckbox = document.getElementById(
  "contained-dark-mode"
);
const container = document.querySelector(".container");

fullDarkModeCheckbox.addEventListener("change", () => {
  if (fullDarkModeCheckbox.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});

containedDarkModeCheckbox.addEventListener("change", () => {
  if (containedDarkModeCheckbox.checked) {
    container.classList.add("dark");
  } else {
    container.classList.remove("dark");
  }
});
