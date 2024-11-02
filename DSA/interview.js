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
  return items.filter(
    (item) => !excludes.some((pair) => item[pair.k] === pair.v)
  );
}

console.log(excludeItems(items, excludes));
