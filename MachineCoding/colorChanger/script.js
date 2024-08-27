const buttons = document.querySelectorAll(".button");

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    if (button.id === "grey") {
      changeColor(button.id);
    } else if (button.id === "white") {
      changeColor(button.id);
    } else if (button.id === "blue") {
      changeColor(button.id);
    } else if (button.id === "yellow") {
      changeColor(button.id);
    }
  })
);

function changeColor(color) {
  document.body.style.backgroundColor = color;
}
