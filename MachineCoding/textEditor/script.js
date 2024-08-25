const inputValue = document.getElementById("input-field");
const outputValue = document.getElementById("output-field");
const buttons = document.querySelectorAll("button");

inputValue.addEventListener("keyup", () => {
  outputValue.textContent = inputValue.value;
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("uppercase")) {
      outputValue.textContent = outputValue.textContent.toUpperCase();
    }
    if (button.classList.contains("lowercase")) {
      outputValue.textContent = outputValue.textContent.toLowerCase();
    }
    if (button.classList.contains("capitalize")) {
      outputValue.textContent =
        outputValue.textContent.slice(0, 1).toUpperCase() +
        outputValue.textContent.slice(1);
    }
    if (button.classList.contains("bold")) {
      outputValue.style.fontWeight = "bold";
    }
    if (button.classList.contains("italic")) {
      outputValue.style.fontStyle = "italic";
    }
    if (button.classList.contains("underline")) {
      outputValue.style.textDecoration = "underline";
    }
  });
});
