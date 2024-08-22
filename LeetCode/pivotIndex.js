/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let totalSum = 0;
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    rightSum = totalSum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));

console.log(pivotIndex([1, 2, 3]));
