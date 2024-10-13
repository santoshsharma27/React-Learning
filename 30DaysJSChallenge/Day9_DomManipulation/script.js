// Dom Manipulation

// Task 1: Select an HTML element by its ID and change its text content.

const h3 = document.querySelector("#myh3");
h3.textContent = "Santosh";

// Task 2 : Select an HTML element by its class and change its background color.

const p = document.querySelector(".myClass");
p.style.backgroundColor = "red";

// Task 3 : Create a new div element with some text content and append it to the body.

const div = document.createElement("div");
div.className = "name";
div.textContent = "My name is Santosh Kumar Sharma";

document.body.append(div);

// Task 4: Create a new li element and add to an existing ul list

const ul = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "PineApple";

ul.appendChild(li);

// Task 5: Select an HTML element and remove it from DOM

const banana = document.querySelector(".banana");
banana.remove();

// Task 6 : Remove the last child of a specific HTMl element

const ulList = document.querySelector("ul");
ulList.lastChild.remove();

// Task 7

const img = document.querySelector("img");
console.log(img.getAttribute("src"));
img.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNALqKuPwqmXAdr7HE76yed4-5yytyQtmhQ&s";
console.log(img.getAttribute("src"));

// Task 8
div.classList.add("fullName");
div.classList.remove("name");

// Task 9

const para = document.querySelector(".para");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  para.textContent = "This is the new text";
});

// Task 10

const buttonColor = document.querySelector(".color");
buttonColor.addEventListener("mouseover", () => {
  buttonColor.style.borderColor = "red";
});

buttonColor.addEventListener("mouseout", () => {
  buttonColor.style.borderColor = "black";
});
