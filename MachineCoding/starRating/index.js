const starRating = document.querySelector(".star-rating");
const result = document.getElementById("rating-result");
const stars = document.querySelectorAll(".star");

let selectedRating = 0; // Store the rating after a click

// Handle star click to set rating
starRating.addEventListener("click", function (e) {
  if (e.target.classList.contains("star")) {
    const ratingValue = parseInt(e.target.getAttribute("data-value"), 10);
    selectedRating = ratingValue;
    updateStars(ratingValue);
    result.textContent = `Rating: ${ratingValue}`;
  }
});

// Handle mouseover to preview rating
starRating.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("star")) {
    const ratingValue = parseInt(e.target.getAttribute("data-value"), 10);
    updateStars(ratingValue);
    result.textContent = `Rating: ${ratingValue}`;
  }
});

// Handle mouseout to reset to selected rating
starRating.addEventListener("mouseout", function () {
  updateStars(selectedRating);
  result.textContent = `Rating: ${selectedRating}`;
});

// Function to update star classes based on rating
function updateStars(rating) {
  stars.forEach((star, index) => {
    star.classList.toggle("selected", index < rating);
  });
}
