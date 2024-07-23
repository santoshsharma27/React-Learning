// Event Handling

// Task 1
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
  button.textContent = "New Text";
});

// Task 2
const img = document.querySelector("img");
const imgBtn = document.querySelector(".imgBtn");

imgBtn.addEventListener("dblclick", () => {
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
});

// Task 3

const para = document.querySelector(".para");
para.addEventListener("mouseover", () => {
  para.style.backgroundColor = "red";
});

// Task 4

para.addEventListener("mouseout", () => {
  para.style.backgroundColor = "white";
});

// Task 5

const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  console.log(e.key);
});

// Task 6

const inputValue = document.querySelector(".input__Value");
input.addEventListener("keyup", () => {
  const value = input.value;
  inputValue.textContent = value;
});

// Task 7

const form = document.querySelector("form");
const userName = document.querySelector(".username");
const password = document.querySelector(".password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(userName.value);
  console.log(password.value);
});

// Task 8

const select = document.querySelector("select");
const dropdownValue = document.querySelector(".dropdownValue");

select.addEventListener("change", function (e) {
  dropdownValue.textContent = `You Choose: ${e.target.value}`;
});

// Task 9

const listItem = document.querySelectorAll("li");
listItem.forEach((li) =>
  li.addEventListener("click", () => {
    console.log(li.textContent);
  })
);

// Task 10

function addChild() {
  const newChild = document.createElement("div");
  newChild.className = "child";
  newChild.textContent = "I am a dynamically added child";
  document.getElementById("parent").appendChild(newChild);
}

// Event listener for adding a new child element
document.getElementById("addChildBtn").addEventListener("click", addChild);

// Event delegation: event listener on the parent element
document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".child")) {
    alert("Child element clicked: " + event.target.textContent);
  }
});
