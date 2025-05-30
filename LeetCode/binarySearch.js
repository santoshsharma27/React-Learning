function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      leftIndex = mid + 1; // search right half
    } else {
      rightIndex = mid - 1; // search left half
    }
  }

  return -1; // not found
}

const nums = [1, 3, 5, 7, 9, 11];
const target = 7;

const result = binarySearch(nums, target);
console.log(result); // Output: 3 (index of 7)

// Time complexity: O(logn)
