const items = [
  { color: "red", type: "tv", age: 18 },
  { color: "silver", type: "phone", age: 20 },
  { color: "blue", type: "book", age: 17 },
];

const excludes = [
  { k: "color", v: "silver" },
  { k: "type", v: "tv" },
];

function excludeItems(items, excludes) {
  excludes.forEach((pair) => {
    items = items.filter((item) => item[pair.k] !== pair.v);
  });

  return items;
}

console.log(excludeItems(items, excludes));
