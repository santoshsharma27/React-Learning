const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "two");
});

Promise.race([promise1, promise2])
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

/*
Promise.race() will take an array of promise and return a single promise with first promise which is either fullfilled or reject

*/
