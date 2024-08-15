function removeDuplicate(arr) {
  return [...new Set(arr)];
}

const arr = [1, 2, 3, 4, 3, 2, 1];

console.log(removeDuplicate(arr));
