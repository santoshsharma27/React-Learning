function splitBunches(arr) {
  const newArr = [];
  if (!arr.length) return [];

  for (let obj of arr) {
    for (let i = 0; i < obj.quantity; i++) {
      newArr.push({ name: obj.name, quantity: 1 });
    }
  }

  return newArr;
}

console.log(splitBunches([{ name: "grapes", quantity: 2 }]));
// Output: [{ name: "grapes", quantity: 1 }, { name: "grapes", quantity: 1 }]
