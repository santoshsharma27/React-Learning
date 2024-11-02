// prices is any array here

function maxProfit(prices) {
  let minPrice = prices[0]; // Initialize with the first price
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // Start loop from second price
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // Update the minimum price
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice; // Calculate max profit
    }
  }

  return maxProfit;
}

// Example usage:

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5 (buy at 1, sell at 6)
console.log(maxProfit([7, 6, 5, 4, 3, 2])); // Output: 0 (no profit possible)
