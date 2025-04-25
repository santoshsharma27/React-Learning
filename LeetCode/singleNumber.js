/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let output = {};

  for (let num of nums) {
    if (output[num]) {
      output[num]++;
    } else {
      output[num] = 1;
    }
  }

  // Find and return the number that appears once
  for (let num in output) {
    if (output[num] === 1) {
      return Number(num);
    }
  }
};

console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
