function moveZerosToEnd(arr) {
	/**
	@param arr: integer[]
	@return: integer[]
	*/

	// your code goes here
  // Start looping from the left
  // if arr[i] == 0 and arr[i + 1] !== 0
  // swap their positions
  // else if arr[i] === 0 and arr[i+1] === 0
  // j++
  
  // if arr[i] !== 0 and arr[i+1] === 0
  // swap their positions
  // else if arr[i] !== 0 and arr[i+1] !== 0
  // j++

  // if arr[i] === 0 and arr[i+1] === 0
  // j++

  // function swap(arr, i, j) {
  //   let temp = arr[i]
  //   arr[i] = arr[j]
  //   arr[j] = temp
  // }

  // let j = 0
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === 0 && arr[i + 1] !== 0) {
  //     swap(arr, i, i + 1)
  //   } else if (arr[i] === 0 && arr[i + 1] === 0) {
  //     j++
  //   } else if (arr[i] !== 0 && arr[i + 1] === 0) {
  //     swap(arr, i, i + 1)
  //   } else if (arr[i] !== 0 && arr[i + 1] !== 0) {
  //     j++
  //   }
  // }


  let j = 0;
  for (let i = 0; i < arr.length; i++) 
    {
      if( arr[i] != 0) {
        arr[j++] = arr[i]
      }
    }
  
  for (let i = j; i < arr.length; i++) 
    {
      arr[i]=0
    }
  return arr
  
}

console.log(moveZerosToEnd([1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]))