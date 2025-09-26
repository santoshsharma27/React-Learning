function moveZeroes(arr) {
  let x = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[x]] = [arr[x], arr[i]];
      x++;
    }
  }

  return arr;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // [ 1, 3, 12, 0, 0 ]

// ✅ Time Complexity: O(n)

/*
Example trace

Input: [0, 1, 0, 3, 12]

i=0 → arr[0]=0 → skip

i=1 → arr[1]=1 → swap with arr[0] → [1, 0, 0, 3, 12], x=1

i=2 → arr[2]=0 → skip

i=3 → arr[3]=3 → swap with arr[1] → [1, 3, 0, 0, 12], x=2

i=4 → arr[4]=12 → swap with arr[2] → [1, 3, 12, 0, 0], x=3

*/
