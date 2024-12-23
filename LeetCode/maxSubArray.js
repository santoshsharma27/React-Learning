function maxSubArray(nums) {
  // Initialize sum and maximum sum
  let currentSum = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output: 6 (subarray: [4, -1, 2, 1])
