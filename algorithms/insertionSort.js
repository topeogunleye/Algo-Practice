const insertionSort = (array) => {
  let holePosition = 0;
  let valueToInsert = 0;

  // loop through array
  for (let i = 0; i < array.length; i++) {

    // select value to be inserted
    valueToInsert = array[i]
    // select hole position
    holePosition = i

    // check if previous value is larger than value to be inserted
    while (holePosition > 0 && array[holePosition -1] > valueToInsert) {
      // move value at hole position to the right
      array[holePosition] = array[holePosition-1]
      // move hole position to the left
      holePosition = holePosition - 1
    }

    array[holePosition] = valueToInsert
  }


  return array

}

console.log(insertionSort([8,7,6,5,4,3,2,1]))