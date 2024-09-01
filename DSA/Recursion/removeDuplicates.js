function removeDuplicate(arr) {
  // Create a set from the array, which removes duplicates
  const uniqueSet = new Set(arr);

  // Convert the set back to an array and return it
  return [...uniqueSet];
}

const arr = [1, 2, 3, 4, 3, 2, 1];

console.log(removeDuplicate(arr));
