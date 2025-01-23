let promise = new Promise((resolve, reject) => {
  let homeworkDone = true; // Change to false to see rejection
  if (homeworkDone) {
    resolve("You get a toy!"); // Success
  } else {
    reject("No toy for you."); // Failure
  }
});

promise
  .then((result) => console.log(result)) // If promise is fulfilled
  .catch((error) => console.error(error)); // If promise is rejected

////////////////////////////

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userName: "Santosh", password: "12345" });
  }, 1000);
});

p1.then((user) => {
  console.log(user);
}).catch((err) => console.log(err));
