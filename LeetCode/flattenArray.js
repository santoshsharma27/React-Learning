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

function flatArr(arr, finalArr = []) {
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

console.log(flatArr(arr2)); // [ 1, 2, 3, 4, 5 ]

function flatArr(arr) {
  let result = [];

  for (let a of arr) {
    if (typeof a === "number") {
      result.push(a);
    } else {
      result.push(...flatArr(a)); // Recursive call and spread
    }
  }

  return result;
}

// Third way

function flattenArray(arr) {
  let result = [];

  for (let a of arr) {
    if (Array.isArray(a)) {
      result.push(...flattenArray(a)); // Recursive call
    } else {
      result.push(a);
    }
  }
  return result;
}

console.log(flattenArray(arr)); // Output: [ 1, 2, { name: 'Santosh' }, 12, 23, 75, 34, 2, 34, 32, 45, 3, 456 ]
