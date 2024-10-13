function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // Calculate the left products and store in the answer array
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  // Calculate the right products on the fly and multiply with the existing left products
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
}

// Example usage:
let nums = [1, 2, 3, 4];
let result = productExceptSelf(nums);
console.log(result); // Output: [24, 12, 8, 6]
