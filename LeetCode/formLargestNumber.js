function formLargestNumber(arr) {
  const result = arr
    .map(String)
    .sort((a, b) => (b + a > a + b ? 1 : -1))
    .join("");

  return result[0] === "0" ? "0" : result;
}

console.log(formLargestNumber([3, 30, 34, 5, 9])); // Output: "9534330"
