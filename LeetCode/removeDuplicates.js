const arr = [2, 6, 4, 9, 3, 2, 7, 3, 6];

// Using set
const result = [...new Set(arr)];
console.log(result);

// Using filter

const newArray = arr.filter((a, index, arr) => arr.indexOf(a) === index);
console.log(newArray);

// Using for loop

let output = [];
for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) === i) {
    output.push(arr[i]);
  }
}
console.log(output);

// using reduce

const uniqueArr = arr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(uniqueArr);

// O(n) Time complexity solution is below

function removeDuplicates(arr) {
  const obj = {};
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
