function countingSort(arr) {
  // https://www.youtube.com/watch?v=7zuGmKfUt7s
  // Write your code here
   // find the maximum element in the array
 const freq = new Array(100).fill(0); // initialize frequency array with 100 zeros
  for (let i = 0; i < arr.length; i++) {
      freq[arr[i]]++; // increment the counter at the index of the value in the frequency array
  }
  return freq;
}