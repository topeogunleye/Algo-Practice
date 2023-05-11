// The function takes an array of unique characters and a string as input
function getShortestUniqueSubstring(arr, str) {
  // Initialize the minimum length to infinity and the result to an empty string
  let minLen = Infinity;
  let result = "";
  // Create a hash map to store the count of each character in arr
  let map = {};
  for (let char of arr) {
    map[char] = 0;
  }
  // Create two pointers to track the start and end of the current window
  let start = 0;
  let end = 0;
  // Create a variable to store the number of unique characters in the current window
  let uniqueCounter = 0;
  // Loop through the string
  while (end < str.length) {
    // Get the current character at the end pointer
    let endChar = str[end];
    // If the character is in the map, increment its count
    if (endChar in map) {
      // If the count was zero before, increment the unique counter
      if (map[endChar] === 0) {
        uniqueCounter++;
      }
      map[endChar]++;
    }
    // Move the end pointer to the right
    end++;
    // While the unique counter is equal to the length of arr, meaning we have a valid window
    while (uniqueCounter === arr.length) {
      // Get the current window length and update the minimum length and result if needed
      let tempLen = end - start;
      if (tempLen < minLen) {
        minLen = tempLen;
        result = str.substring(start, end);
      }
      // Get the current character at the start pointer
      let startChar = str[start];
      // If the character is in the map, decrement its count
      if (startChar in map) {
        // If the count becomes zero after, decrement the unique counter
        map[startChar]--;
        if (map[startChar] === 0) {
          uniqueCounter--;
        }
      }
      // Move the start pointer to the right
      start++;
    }
  }
  // Return the result
  return result;
}


// The time complexity of the solution is O(n + m), where n is the length of 
// the string and m is the length of the array. 
// This is because the solution loops through the string once using two pointers, and 
// each pointer can move at most n times. The solution also loops through the array once 
// to create the hash map, which takes O(m) time.

// The space complexity of the solution is O(m), 
// where m is the length of the array. This is 
// because the solution creates a hash map to store the count of each 
// character in the array, which takes O(m) space. The solution also creates 
// some variables and a result string, which take O(1) space.