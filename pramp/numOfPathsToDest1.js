// The function takes an integer n as input
function numOfPathsToDest(n) {
  // Create a 1D array of size n to store the number of paths for each cell in the current row
  let dp = new Array(n);
  // Initialize the first element to 1, since there is only one way to reach it
  dp[0] = 1;
  // Loop through the rows, starting from the second row
  for (let i = 1; i < n; i++) {
    // Loop through the columns, starting from the second column
    for (let j = 1; j < n; j++) {
      // If the cell is above the diagonal, set its value to 0, since it is not a valid position
      if (i > j) {
        dp[j] = 0;
      } else {
        // Otherwise, set its value to the sum of the values of the cell above it and the cell to its left
        // This is because we can reach this cell either by moving down from the cell above or by moving right from the cell to its left
        // Note that dp[j] already contains the value of the cell above it, and dp[j-1] contains the value of the cell to its left
        dp[j] += dp[j-1];
      }
    }
  }
  // Return the value of the last element, which is the destination
  return dp[n-1];
}

// The time complexity of the optimized solution is still O(n^2), 
// where n is the size of the grid. This is because the solution loops through the 1D array twice, 
// once to initialize it and once to fill it with the number of paths.

// The space complexity of the optimized solution is O(n), 
// because the solution creates a 1D array of size n to store the number of paths for each cell in the current row. 
// This reduces the space usage from O(n^2) to O(n).
