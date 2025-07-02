function multiply(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    result.push(product);
  }

  return result;
}

console.log(multiply([1, 2, 3])); // [6, 3, 2]
console.log(multiply([1, 2, 3, 4])); // [24, 12, 8, 6]

// Time Complexity: O(n^2)

// ===================================================

function multiply2(arr) {
  const n = arr.length;
  const result = Array(n).fill(1);

  // Calculate prefix products
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= arr[i];
  }

  // Calculate suffix products and multiply with prefix
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= arr[i];
  }

  return result;
}

console.log(multiply2([1, 2, 3, 4])); // [24, 12, 8, 6]

// ===================================================

function getData(obj, finalArr = []) {
  for (let key in obj) {
    if (!Array.isArray(obj[key])) {
      finalArr.push(obj[key]);
    } else {
      for (let item of obj[key]) {
        getData(item, finalArr); // recursively handle objects inside array
      }
    }
  }
  return finalArr;
}

let obj = {
  name: "bob1",
  children: [
    {
      name: "bob2",
      children: [
        {
          name: "bob3",
        },
      ],
    },
  ],
};

console.log(getData(obj)); // [ 'bob1', 'bob2', 'bob3' ]
