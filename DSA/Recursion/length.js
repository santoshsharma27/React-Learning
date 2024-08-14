String.prototype.myLength = function () {
  let count = 0;

  for (const char of this) {
    if (char !== "") {
      count++;
    }
  }
  return count;
};

console.log("Hello".myLength());
console.log("santosh".myLength());
console.log("santosh".length);
