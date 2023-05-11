// The function takes an integer n as input
function numOfPathsToDest(n) {
  // Create a 2D array of size n x n to store the number of paths for each cell
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
  }
  // Initialize the first row and the first column to 1, since there is only one way to reach them
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
    dp[i][0] = 1;
  }
  // Loop through the rest of the cells, starting from the second row and the second column
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      // If the cell is above the diagonal, set its value to 0, since it is not a valid position
      if (i > j) {
        dp[i][j] = 0;
      } else {
        // Otherwise, set its value to the sum of the values of the cell above it and the cell to its left
        // This is because we can reach this cell either by moving down from the cell above or by moving right from the cell to its left
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
    }
  }
  // Return the value of the bottom-right cell, which is the destination
  return dp[n-1][n-1];
}
