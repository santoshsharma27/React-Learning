// candies is array
// extraCandies is number

function kidsWithCandies(candies, extraCandies) {
  let highest = candies[0];
  let result = [];

  for (let i = 1; i < candies.length; i++) {
    if (highest < candies[i]) {
      highest = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= highest) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [ true, true, true, false, true ]
