const starRating = document.querySelector(".star-rating");
const result = document.getElementById("rating-result");
const stars = document.querySelectorAll(".star");

let selectedRating = 0; // To store the rating after a click

starRating.addEventListener("click", function (e) {
  if (e.target.classList.contains("star")) {
    const ratingValue = e.target.getAttribute("data-value");
    selectedRating = ratingValue;
    result.textContent = `Rating: ${ratingValue}`;
    stars.forEach((star, index) => {
      if (index + 1 <= ratingValue) {
        star.classList.add("selected");
      }
    });
  }
});

starRating.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("star")) {
    const ratingValue = e.target.getAttribute("data-value");
    result.textContent = `Rating: ${ratingValue}`;
    stars.forEach((star, index) => {
      if (index + 1 <= ratingValue) {
        star.classList.add("selected");
      }
    });
  }
});

starRating.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("star")) {
    const ratingValue = e.target.getAttribute("data-value");
    stars.forEach((star, index) => {
      if (index + 1 <= ratingValue) {
        star.classList.remove("selected");
      }
      if (index + 1 <= selectedRating) {
        star.classList.add("selected");
      }
      result.textContent = `Rating: ${selectedRating}`;
    });
  }
});
