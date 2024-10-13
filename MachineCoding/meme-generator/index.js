const generateBtn = document.querySelector(".generate-button");
const memeTitle = document.querySelector(".meme-title");
const memeImage = document.querySelector(".meme-image");
const authorOutput = document.querySelector(".author");

function getMeme() {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { author, url, title } = data;
      memeTitle.textContent = title;
      memeImage.src = url;
      authorOutput.innerText = author;
    })
    .catch((err) => console.error(err));
}

document.addEventListener("DOMContentLoaded", getMeme);

generateBtn.addEventListener("click", getMeme);
