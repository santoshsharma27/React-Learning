/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flattenToDepth = function (arr, n) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && n) {
      res.push(...flattenToDepth(arr[i], n - 1));
    } else {
      res.push(arr[i]);
    }
  }

  return res;
};

////////////////////////////

var flat = function (arr, n, res = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && n) {
      flat(arr[i], n - 1, res);
    } else {
      res.push(arr[i]);
    }
  }

  return res;
};

const nestedArray = [1, [2, [3, [4, 5]]]];

console.log(flattenToDepth(nestedArray, 1));
// [1, 2, [3, [4, 5]]]

console.log(flattenToDepth(nestedArray, 2));
// [1, 2, 3, [4, 5]]

console.log(flat(nestedArray, 3));
// [1, 2, 3, 4, 5]
