const url = "https://api.chucknorris.io/jokes/random";

const displayJoke = document.getElementById("display-joke");
const button = document.getElementById("getJoke");
let latestRequest = 0;

button.addEventListener("click", getRandomJoke);

function getRandomJoke() {
  latestRequest++;
  const currentRequest = latestRequest;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Something went wrong while fecting data ${res.status}`
        );
      }
      return res.json();
    })
    .then((data) => {
      //   console.log(currentRequest, latestRequest);
      if (currentRequest === latestRequest) {
        // console.log(data.value);
        displayJoke.textContent = data.value;
      }
    })
    .catch((err) => console.error(err.message));
}
