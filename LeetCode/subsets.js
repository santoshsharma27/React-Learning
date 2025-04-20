function subsets(arr) {
  const result = [];

  function backtrack(start, path) {
    result.push([...path]); // Save the current subset

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]); // Choose
      backtrack(i + 1, path); // Explore
      path.pop(); // Un-choose (backtrack)
    }
  }

  backtrack(0, []);
  return result;
}

console.log(subsets([1, 2, 3]));
