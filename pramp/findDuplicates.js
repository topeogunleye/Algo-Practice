function findDuplicates(arr1, arr2) {
  // your code goes here
 
  let i = 0
  let j = 0
  
  let duplicateArray = []
  
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        // if they are not the same, move it by 1
        i++
      } else if (arr1[i] > arr2[j]) {
        // i
        //[5, 6, 7]
        
        // j
        //[3, 5, 6]
        j++
     
      } else {
        duplicateArray.push(arr1[i])
        i = i + 1
        j = j + 1
      }
  }
  
  return duplicateArray
}


findDuplicates([1, 2, 3, 5, 6, 7], [3, 6, 7, 8, 20])

// O(A * B)
// O(A + B)

// function findDuplicates(arr1, arr2) {
//   // your code goes here
  
//   let UniqueArray = [];
  
//   let obj = {}
  
//   for (let i = 0; i < arr1.length; i++) {
//     if (!obj[arr1[i]]) {
//       obj[arr1[i]] = true
//     }
//   }
  
//   // console.log(obj)
  
//   for (let j = 0; j < arr2.length; j++) {
//     // check if current number exist in object
//     if (obj[arr2[j]] ) 2{
//       UniqueArray.push(arr2[j])    
//     }
//   }
  
//   return UniqueArray

// }
