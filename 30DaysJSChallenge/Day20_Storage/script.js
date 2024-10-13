// Local Storage and Session Storage

// Task 1: Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

function task1(str) {
  localStorage.setItem("name", str);
  const value = localStorage.getItem("name");
  console.log(value);
}

task1("Santosh");

// Task 2: Write a script to save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

function task2(obj) {
  localStorage.setItem("person", JSON.stringify(obj));
  const value = JSON.parse(localStorage.getItem("person"));
  console.log(value);
}

const person = {
  name: "Santosh Kumar Sharma",
  age: 29,
  city: "Hajipur",
  state: "Bihar",
};

task2(person);

// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

function task3() {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData = {
      username: name.value,
      email: email.value,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    displayUserData();
  });
}

function displayUserData() {
  const data = JSON.parse(localStorage.getItem("userData"));
  if (data) {
    document.getElementById(
      "userData"
    ).textContent = `Name: ${data.username}, Email: ${data.email}`;
  }
}

task3();
document.addEventListener("DOMContentLoaded", displayUserData);

// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

function task4(key) {
  const before = localStorage.getItem(key);
  console.log(before);
  localStorage.removeItem(key);
  console.log(localStorage.getItem(key)); // Output: null
}

task4("name");

// Task 5: Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value.

function task5(city) {
  sessionStorage.setItem("cityName", city);
  const value = sessionStorage.getItem("cityName");
  console.log(value);
}

task5("Bangalore");

// Task 6: Write a script to save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.

function task6(obj) {
  sessionStorage.setItem("sessionUser", JSON.stringify(obj));
  const value = JSON.parse(sessionStorage.getItem("sessionUser"));
  console.log(value);
}

const person2 = {
  name: "Sandeep Kumar Sharma",
  age: 25,
  city: "Bangalore",
  state: "Karnataka",
};

task6(person2);

// Task 7: Create a simple form that saves user input (e.g., name and email) to sessionStorage when submitted. Retrieve and display the saved data on page load.

function task7() {
  const name = document.querySelector("#name2");
  const email = document.querySelector("#email2");
  const form = document.querySelector(".session");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData = {
      username: name.value,
      email: email.value,
    };
    sessionStorage.setItem("sessionUserInfo", JSON.stringify(userData));
    displaySessionUserData();
  });
}

function displaySessionUserData() {
  const data = JSON.parse(sessionStorage.getItem("sessionUserInfo"));
  if (data) {
    document.getElementById(
      "sessionUserData"
    ).textContent = `Name: ${data.username}, Email: ${data.email}`;
  }
}

task7();
document.addEventListener("DOMContentLoaded", displaySessionUserData);

// Task 8: Write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal.

function task8(key) {
  const before = sessionStorage.getItem(key);
  console.log(before);
  sessionStorage.removeItem(key);
  console.log(sessionStorage.getItem(key)); // Output: null
}

task8("cityName");

// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage. Retrieve and log the values from both storage mechanisms.

function saveToBothStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
  console.log(`localStorage value: ${localStorage.getItem(key)}`);
  console.log(`sessionStorage value: ${sessionStorage.getItem(key)}`);
}

saveToBothStorages("language", "Javascript");

// Task 10: Write a function that clears all data from both localStorage and sessionStorage. Verify that both storages are empty.

function clearStorages() {
  localStorage.clear();
  sessionStorage.clear();
}

clearStorages();
