// //------------
// //const array1 = ['a', 'b', 'c', 'x']
// //const array2 = ['z', 'y', 'x'];
// //should return true.

// // 2 parameters - arrays - no size limit
// // reeturn true or false
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x']

// function containsCommonItem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j]) {
//         return true;
//       }
//     }
//   }
//   return false
// }

// console.log(containsCommonItem(array1, array2))

// O(a*b)

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x'];

// array1 ==> obj {
// a: true,
// b: true,
// c: true,
// x: true
// }
// array2[index] === obj.properties

function containsCommonItem(arr1, arr2) {
  // loop through first array and create objects where properties === items in the array
  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = array1[i];
      map[item] = true
    }
  }
  // console.log(map)
  // loop through the second array and check if item in the second array exists on created object

  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

//O (a + b)

console.log(containsCommonItem(array1, array2))
