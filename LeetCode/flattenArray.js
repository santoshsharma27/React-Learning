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

function flattenArray(arr, finalArr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i], finalArr); // Recursive call
    } else {
      finalArr.push(arr[i]);
    }
  }
  return finalArr;
}

console.log(flattenArray(arr, [])); // Output: [ 1, 2, { name: 'Santosh' }, 12, 23, 75, 34, 2, 34, 32, 45, 3, 456 ]

// Third way

function flatArr(arr, finalArr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      finalArr.push(arr[i]);
    } else {
      flatArr(arr[i], finalArr); // Recursive call
    }
  }
  return finalArr;
}

const arr2 = [1, 2, [3, [4, 5]]];

console.log(flatArr(arr2, [])); // [ 1, 2, 3, 4, 5 ]
