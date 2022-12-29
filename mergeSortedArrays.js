const mergeSortedArrays = (arr1, arr2) => {
  mergedArray = [...arr1, ...arr2];

  return mergedArray.sort((a, b) => a - b)

}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))
// [ 0, 3, 4, 4, 6, 30, 31 ]