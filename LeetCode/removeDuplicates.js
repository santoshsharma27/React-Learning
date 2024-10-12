const arr = [2, 6, 4, 9, 3, 2, 7, 3, 6];

// Using set
const result = [...new Set(arr)];
console.log(result);

// Using filter

const newArray = arr.filter((a, index, arr) => arr.indexOf(a) === index);
console.log(newArray);

// Using for loop

const arr1 = [2, 6, 4, 9, 3, 2, 7, 3, 6];
let output = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1.indexOf(arr1[i]) === i) {
    output.push(arr1[i]);
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
