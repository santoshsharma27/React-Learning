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
