const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.textContent = "Please enter a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.textContent = "Please enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.textContent = bmi;

    if (bmi < 18.6) {
      results.textContent = `${bmi}  (You are under weight)`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.textContent = `${bmi}  (You weight is normal)`;
    } else if (bmi > 24.9) {
      results.textContent = `${bmi}  (You are overweight weight)`;
    }
  }
});
