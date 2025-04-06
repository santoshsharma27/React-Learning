// Promised and Async Await

// Task 1
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolve in two seconds");
  }, 2000);
});

p.then((value) => {
  console.log(value);
});

// Task 2

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise reject in two seconds");
  }, 2000);
});

p2.then((value) => {
  console.log(value);
}).catch((err) => {
  console.error(err);
});

// Task 3

const fetchData = (url, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${url}`);
    }, delay);
  });
};

fetchData("https://jsonplaceholder.typicode.com/posts/1", 1000)
  .then((data) => {
    console.log("first fetch:", data);
    return fetchData("https://jsonplaceholder.typicode.com/posts/2", 2000);
  })
  .then((data) => {
    console.log("second fetch:", data);
    return fetchData("https://jsonplaceholder.typicode.com/posts/2", 3000);
  })
  .then((data) => {
    console.log("Third fetch:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Task 4

async function consumePromise() {
  try {
    const response = await p;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromise();

// Task 5

async function consumePromise2() {
  try {
    const response = await p2;
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
consumePromise2();

// Task 6

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Task 7

async function getAllPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
}

getAllPosts();

// Task 8

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// Task 9

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise4, promise5]).then((value) => {
  console.log(value);
  // Both resolve, but promise5 is faster
});
