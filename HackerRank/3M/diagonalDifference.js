// Return the absolute difference between the sums of the diagonals
function diagonalDifference(arr) {
  // Write your code here
  /*
  Calculates the absolute difference between the sums of the two diagonals
  in a square matrix.

  Args:
  matrix (array of arrays): The input square matrix.

Returns:
  number: The absolute difference between the sums of the two diagonals.
*/

const n = arr.length;

let diagonalSum1 = 0;
let diagonalSum2 = 0;

// Iterate over the rows of the matrix
for (let i = 0; i < n; i++) {
    // Add the values of the elements in the diagonal
    diagonalSum1 += arr[i][i]   // Diagonal from top-left to right-bottom
    diagonalSum2 += arr[i][n - i - 1] // Diagonal from top-right to left-bottom
}

// Return the absolute difference between the sum of the diagonals
return Math.abs(diagonalSum1 - diagonalSum2)
}

// Example square matrix
const matrix = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];

// Call the function to calculate the diagonal difference
const result = diagonalDifference(matrix);

// Print the result
console.log("Diagonal Difference:", result);