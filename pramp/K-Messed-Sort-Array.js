function sortKMessedArray(arr, k) {
  // your code goes here
  // arr = [1, 4, 5, 2, 3, 7, 8, 6, 10, 9], k = 2
  // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  for (let i = 1; i < arr.length; i++) {
    // set current element to J
    let j = i - 1
    
    // while current element is more than the next element
    // swap the elements
    while (j >= 0 && arr[j] > arr[j+1]) {
      // swap the elements
      [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      // decrement j
      j--
    }
  }
  
  return arr
  
}

sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2)