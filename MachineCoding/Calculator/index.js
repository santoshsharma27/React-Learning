document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");

  let currentInput = "";
  let previousInput = "";
  let operator = "";

  // Function to perform calculation
  const calculate = () => {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    if (isNaN(num1) || isNaN(num2)) return "";

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Error";
      default:
        return "";
    }
  };

  buttons.forEach((button) =>
    button.addEventListener("click", () => {
      const value = button.getAttribute("data-value");

      if (!isNaN(value) || value === ".") {
        currentInput += value;
        display.value = currentInput;
      } else if (value === "C") {
        // Clear button
        currentInput = "";
        previousInput = "";
        operator = "";
        display.value = "";
      } else if (value === "=") {
        // Equals button
        if (previousInput && currentInput && operator) {
          display.value = calculate();
          previousInput = display.value;
          currentInput = "";
          operator = "";
        }
      } else {
        // Operator button
        if (currentInput === "" && previousInput !== "") {
          operator = value;
          return;
        }
        if (previousInput === "") {
          previousInput = currentInput;
          operator = value;
          currentInput = "";
        } else {
          display.value = calculate();
          previousInput = display.value;
          operator = value;
          currentInput = "";
        }
      }
    })
  );
});
