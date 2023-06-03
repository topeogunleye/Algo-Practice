function getIndicesOfItemWeights(arr, limit) {
  // let result;
  // [4, 6, 10, 15, 10]
  // arr to store the indices
  let indices = {}
  
  // [4, 4, 1], 5
  
  // 5 - 4 = 1   is 1 in hashmap? 
  // build hashmap k:v  { 4: [0,1], 1: [2]}
  
  // loop through our array
  for (let i = 0; i < arr.length; i++) {
    
    
    let diff = limit - arr[i]
    
    // if diff is in indices, return [indices[diff], i]
    if (indices[diff] !== undefined) {
      return [i, indices[diff]]
    } else {
      indices[arr[i]] = i
    }
  }

  return []
}

console.log(getIndicesOfItemWeights([4, 4, 1], 5))
console.log(getIndicesOfItemWeights([4, 6, 10, 15, 16], 21))
console.log(getIndicesOfItemWeights([4, 4], 8))
                                  
/*

pair [a,b]
a > b   a,b
b > a   b,a


[4, 6, 10, 15, 16]/ 
 const arr = {
4: true
6: true

}

for outer i =0
  for inner j=i+1
    add both == limit

*/




