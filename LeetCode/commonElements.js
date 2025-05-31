function commonElements(a, b) {
  // Here a and b is array
  return a.filter((item) => b.includes(item));
}

const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 4, 7];
console.log(commonElements(a, b)); // [4,5]

// =================================================

function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];

  set1.forEach((item) => {
    if (set2.has(item)) {
      result.push(item);
    }
  });

  return result;
}

const array1 = [1, 2, 3, 4, 4, 5];
const array2 = [4, 5, 6, 7, 8, 4];

console.log(findCommonElements(array1, array2)); // [4, 5]
