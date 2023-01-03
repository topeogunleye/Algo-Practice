const mergeSortedArrays = (array1, array2) => {

  const mergedArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 0;
  let j = 0;
 
  // check inputs
  if (array1.length === 0) return array2;

  if (array2.length === 0) return array1;

  function pushFirstArrayItem () {
    mergedArray.push(array1Item)
    array1Item = array1[i]
    i++
  }

  function pushSecondArrayItem () {
    mergedArray.push(array2Item)
    array2Item = array2[j]
    j++
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      pushFirstArrayItem()
    } else {
      pushSecondArrayItem()
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,31], [4,6,30]))
// [ 0, 3, 4, 4, 6, 30, 31 ]