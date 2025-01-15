function flat(arr) {
  return arr.flat(Infinity);
}

const arr = [
  1,
  { name: "Santosh" },
  [12, 23, [75, 34, [2, 34]], [32, 45]],
  [3, 456],
];

// console.log(flat(arr));

// Second way

function flatArr(arr, finalArr) {
  for (let a of arr) {
    if (typeof a === "number") {
      finalArr.push(a);
    } else {
      flatArr(a, finalArr); // Recursive call
    }
  }
  return finalArr;
}

const arr2 = [1, 2, [3, [4, 5]]];

console.log(flatArr(arr2, [])); // [ 1, 2, 3, 4, 5 ]

// Third way

function flattenArray(arr, finalArr) {
  for (let a of arr) {
    if (Array.isArray(a)) {
      flattenArray(a, finalArr); // Recursive call
    } else {
      finalArr.push(a);
    }
  }
  return finalArr;
}

console.log(flattenArray(arr, [])); // Output: [ 1, 2, { name: 'Santosh' }, 12, 23, 75, 34, 2, 34, 32, 45, 3, 456 ]
