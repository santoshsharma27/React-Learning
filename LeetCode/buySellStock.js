// prices is any array here

function stock(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    }
  }
  return maxProfit;
}

console.log(stock([7, 1, 5, 3, 6, 4])); // Output: 5 (buy at 1, sell at 6)
console.log(stock([7, 6, 5, 4, 3, 2])); // Output: 0 (no profit possible)

// Time Complexity: O(n²) — slow for large arrays

//////////////////////

function stock1(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // Update the minimum price
    } else {
      const profit = prices[i] - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

// Example usage:

console.log(stock1([7, 1, 5, 3, 6, 4])); // Output: 5 (buy at 1, sell at 6)
console.log(stock1([7, 6, 5, 4, 3, 2])); // Output: 0 (no profit possible)

// Time Complexity: O(n)
