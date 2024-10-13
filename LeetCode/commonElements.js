function commonElements(a, b) {
  // Here a and b is array
  return a.filter((item) => b.includes(item));
}

const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 4, 7];
console.log(commonElements(a, b)); // [4,5]
