// Error Handling

// Task 1

function throwError() {
  throw new Error("This is an error message");
}

try {
  throwError();
} catch (error) {
  console.log(error.message);
}

// Task 2

function divide(num, denominator) {
  try {
    if (denominator === 0) {
      throw new Error("You need to enter correct denominator");
    }
    console.log(num / denominator);
  } catch (error) {
    console.log(error.message);
  }
}

divide(10, 2);

// Task 3

function task3() {
  try {
    console.log("Try Block");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("This is the final block");
  }
}

task3();

// Task 4

// Task 5

function validateUserInput(str) {
  try {
    if (str === "") throw new Error("String should not be empty");
  } catch (error) {
    console.log(error.message);
  }
}

validateUserInput("Santosh");
validateUserInput("");

//  Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

function randomPromise() {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10);
    if (random > 5) {
      resolve("Promise resolved succesfully");
    } else {
      reject("Promise can't be resolved this time");
    }
  });
}

randomPromise()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Task 7

async function randomPromiseAsync() {
  try {
    let data1 = await randomPromise();
    console.log(data1);
  } catch (error) {
    console.log(error);
  }
}

randomPromiseAsync();

// Task 8

function fetchData(url) {
  fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err.message));
}

fetchData("httpss://jsonplaceholder.typicode.com/posts/1");

// Task 9

async function fetchData2() {
  try {
    const res = await fetch("httpss://jsonplaceholder.typicode.com/posts/1");
    if (!res.ok) throw new Error("Url is not correct");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

fetchData2();
