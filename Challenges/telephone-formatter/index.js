const input = document.querySelector("input");

input.addEventListener("input", () => {
  if (input.value.length === 4) {
    input.value = `+(${input.value.slice(0, 3)}) - ${input.value.slice(3)}`;
  }
});
