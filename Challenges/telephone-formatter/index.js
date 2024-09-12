const input = document.querySelector("input");

input.addEventListener("input", () => {
  let value = input.value.replace(/\D/g, "");
  if (value.length === 4) {
    input.value = `+(${value.slice(0, 3)}) - ${value.slice(3)}`;
  }
});
