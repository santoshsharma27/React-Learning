function createScoreTracker(n) {
  let current = n;
  return function tracker() {
    return current++;
  };
}

const result = createScoreTracker(10);
console.log(result());
console.log(result());
console.log(result());
