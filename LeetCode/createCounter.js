function createCounter(n) {
  let current = n;
  return function counter() {
    return current++;
  };
}

const result = createCounter(5);
console.log(result()); // 5
console.log(result()); // 6
console.log(result()); // 7
