function triplet(nums) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of nums) {
    if (num <= smallest) {
      smallest = num;
    } else if (num <= secondSmallest) {
      secondSmallest = num;
    } else {
      return true;
    }
  }

  return false;
}

console.log(triplet([2, 1, 5, 0, 4, 6])); // true

console.log(triplet([5, 4, 3, 2, 1])); // false
