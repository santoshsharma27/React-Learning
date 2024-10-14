function capitalFirstWord(names) {
  return names
    .map((name) =>
      name
        .split(" ")
        .map(
          (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
    )
    .join(", ");
}

console.log(capitalFirstWord(["sanTosH"]));
console.log(capitalFirstWord(["sanTosH shARMa", "sanDeep saHu"]));
