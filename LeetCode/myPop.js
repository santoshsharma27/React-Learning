Array.prototype.myPop = function () {
  if (this.length === 0) return undefined;

  const lastItem = this[this.length - 1];
  this.length--;
  return lastItem;
};

let arr = [1, 2, 3];
console.log(arr.myPop()); // 3
console.log(arr); // [1, 2]
