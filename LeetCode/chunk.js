/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

var chunk = function (arr, size) {
  let n = arr.length;
  const result = [];
  for (let i = 0; i < n; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log(chunk([1, 2, 3, 4, 5], 3)); // [ [ 1, 2, 3 ], [ 4, 5 ] ]
console.log(chunk([1, 2, 3, 4, 5], 2)); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
