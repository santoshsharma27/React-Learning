Array.prototype.myPush = function (...items) {
  // Here we are using rest operator
  for (let i = 0; i < items.length; i++) {
    this[this.length] = items[i];
  }
  return this.length;
};

let arr = [1, 2, 3];
arr.myPush(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]
