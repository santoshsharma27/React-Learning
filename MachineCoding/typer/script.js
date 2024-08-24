const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Love", "Jhakaas", "mast", "dhinchak", "Weird"];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 600;

let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newLetterDelay);
});

let randomArrayIndex = Math.floor(Math.random() * (words.length - 1));

function type() {
  if (charIndex < words[randomArrayIndex].length) {
    typedTextSpan.textContent += words[randomArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function generateRandomIndex() {
  const randomArrayIndex = Math.floor(Math.random() * (words.length - 1));
  return randomArrayIndex;
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[randomArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    randomArrayIndex = Math.floor(Math.random() * (words.length - 1));
    setTimeout(type, typingDelay + 1000);
  }
}
