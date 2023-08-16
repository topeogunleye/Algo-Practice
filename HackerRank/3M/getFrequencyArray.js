/**
 * This function takes an array of integers as input and returns an array of integers
 * representing the frequency of each value in the input array.
 * 
 * The function first initializes a new array called frequencyArray with 100 zeros using the fill method.
 * This is because the input array is assumed to contain integers between 0 and 99.
 * 
 * The function then iterates over each element in the input array using a for loop. 
 * For each element, the function increments the counter at the index of the value in the frequencyArray. 
 * This means that if the input array contains the value 5, 
 * the counter at index 5 in the frequencyArray will be incremented by 1.
 * 
 * Finally, the function returns the frequencyArray, which now contains the frequency of each value in 
 * the input array. For example, if the input array was [1, 2, 2, 3, 3, 3], 
 * the frequencyArray returned by the function would be [0, 1, 2, 3, 0, 0, ..., 0], 
 * where the value at index 1 is 1, the value at index 2 is 2, and the value at index 3 is 3.
 * 
 * @param {number[]} inputArray - An array of integers between 0 and 99.
 * @returns {number[]} An array of integers representing the frequency of each value in the input array.
 */
function getFrequencyArray(inputArray) {
    const frequencyArray = new Array(100).fill(0); // Initialize a new array with 100 zeros.
  
    for (const value of inputArray) {
      frequencyArray[value]++; // Increment the counter at the index of the value in the frequencyArray.
    }
  
    return frequencyArray;
  }