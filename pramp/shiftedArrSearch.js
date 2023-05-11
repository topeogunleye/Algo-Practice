// The function takes a sorted array that is shifted by an unknown offset and a number as input
function shiftedArrSearch(shiftArr, num) {
  // Initialize the start and end pointers to the first and last index of the array
  let start = 0;
  let end = shiftArr.length - 1;
  // Loop until the start pointer is less than or equal to the end pointer
  while (start <= end) {
    // Calculate the middle index of the current window
    let mid = Math.floor((start + end) / 2);
    // If the number is found at the middle index, return it
    if (shiftArr[mid] === num) {
      return mid;
    }
    // If the left half of the window is sorted
    if (shiftArr[start] <= shiftArr[mid]) {
      // If the number is in the range of the left half, search in that half
      if (num >= shiftArr[start] && num < shiftArr[mid]) {
        end = mid - 1;
      } else {
        // Otherwise, search in the right half
        start = mid + 1;
      }
    } else {
      // If the right half of the window is sorted
      // If the number is in the range of the right half, search in that half
      if (num > shiftArr[mid] && num <= shiftArr[end]) {
        start = mid + 1;
      } else {
        // Otherwise, search in the left half
        end = mid - 1;
      }
    }
  }
  // If the number is not found, return -1
  return -1;
}

// The time complexity of the solution is O(log n), 
// where n is the length of the array. This is because 
// the solution uses a modified binary search algorithm that divides 
// the array into two halves at each iteration and searches in the sorted 
// half that contains the number. The number of iterations is logarithmic to the size of the array.

// The space complexity of the solution is O(1), because 
// the solution only uses some variables and pointers, which 
// take constant space. The solution does not create any new arrays or data structures.