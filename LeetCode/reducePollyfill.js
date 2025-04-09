Array.prototype.myReduce = function (cb, initialValue) {
  // Ensure callback is not a function
  if (typeof cb !== "function") {
    throw new Error("callback is not a function");
  }

  // Handle Empty Array cases
  if (this.length === 0 && initialValue === undefined) {
    throw new Error("Array is empty and no initial value");
  }

  let acc = initialValue;
  let startIndex = 0;

  // If no initial value is provided, use the first element as the initial value
  if (acc === undefined) {
    acc = this[0];
    startIndex = 1;
  }

  // Lopp through the array
  for (let i = startIndex; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }

  return acc;
};

const sum = [1, 2, 3, 4, 5].myReduce((acc, curr) => acc + curr, 0);
console.log(sum);
