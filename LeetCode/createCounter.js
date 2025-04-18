function createCounter(n) {
  return function counter() {
    return n++;
  };
}

const result = createCounter(5);
console.log(result()); // 5
console.log(result()); // 6
console.log(result()); // 7
