function merge(arr1, arr2) {
  let result = [];
  let index = 0;

  for (let i = 0; i < arr1.length; i++) {
    // result.push(arr1[i])
    result[index] = arr1[i];
    index++;
  }

  for (let j = 0; j < arr2.length; j++) {
    // result.push(arr2[j])
    result[index] = arr2[j];
    index++;
  }

  return result;
}

console.log(merge([1, 2, 3], [4, 5])); // [ 1, 2, 3, 4, 5 ]
