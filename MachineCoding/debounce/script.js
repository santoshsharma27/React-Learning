// with each character typed in search box, make an API call to randomuserme api and display a card below it. Use debounce concept to reduce api calls.

const userInput = document.getElementById("user-input");
const userCard = document.getElementById("user-card");

userInput.addEventListener("input", debounce(fetchRandomUser, 1000));

function fetchRandomUser() {
  if (userInput.value.length > 0) {
    fetch("https://randomuser.me/api")
      .then((res) => res.json())
      .then((data) => displayUser(data.results[0]))
      .catch((err) => console.error(err.message));
  }
}

function displayUser(user) {
  userCard.style.display = "block";
  userCard.innerHTML = `
  <img src="${user.picture.large}" />
  <p>${user.email}</p>
  `;
}

function debounce(fn, delay = 3000) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
