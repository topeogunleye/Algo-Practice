//------------
//const array1 = ['a', 'b', 'c', 'x']
//const array2 = ['z', 'y', 'x'];
//should return true.

// 2 parameters - arrays - no size limit
// reeturn true or false
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x']

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        return true;
      }
    }
  }
  return false
}

console.log(containsCommonItem(array1, array2))