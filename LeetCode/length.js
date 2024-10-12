String.prototype.myLength = function () {
  let count = 0;

  for (const char of this) {
    count++;
  }
  return count;
};

console.log("Hello".myLength()); // Output: 5
console.log("santosh".myLength()); // Output: 7
console.log("santosh".length); // Output: 7 (Built-in length property)
