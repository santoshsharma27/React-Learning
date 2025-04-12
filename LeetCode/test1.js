function getData(obj, finalArr) {
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

console.log(getData(obj, []));
