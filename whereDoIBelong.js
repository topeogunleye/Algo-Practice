function getIndexToIns(arr, num) {

  // sort the array
  let sorted = arr.sort((a,b) => a-b)

  for (let i = 0; i < sorted.length; i++) {
    if (num > sorted[i]) {//if the current item is smaller than the 
      console.log(sorted[i])
      // return arr[i]; //return the value at the index you are on
   };
  }

  // return num;
}

getIndexToIns([40, 60]), 50