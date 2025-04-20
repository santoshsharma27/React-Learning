function commonElements(a, b) {
  // Here a and b is array
  return a.filter((item) => b.includes(item));
}

const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 4, 7];
console.log(commonElements(a, b)); // [4,5]

function intersect(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

const c = [1, 2, 3, 4, 5];
const d = [4, 5, 6, 4, 7];
console.log(intersect(c, d)); // Output: [4, 5]
