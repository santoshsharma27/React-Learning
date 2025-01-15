// candies is array
// extraCandies is number

function kidsWithCandies(candies, extraCandies) {
  let highest = candies[0];
  let result = [];

  // Find the highest number of candies
  for (let i = 1; i < candies.length; i++) {
    if (candies[i] > highest) {
      highest = candies[i];
    }
  }

  // Determine if each kid can have the most candies
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
