const pairs = [];
const set = new Set(arr);
for (let i = 0; i < arr.length; i++) {
    const diff = arr[i] - k;
    if (set.has(diff)) {
    result.push([diff, arr[i]]);
    }
}

return pairs;


function findPairsWithGivenDifference(arr, k) {
  // your code goes her
 // since we don't allow duplicates, no pair can satisfy x - 0 = y

  if (k == 0) return [] 
  let res = []
  
  let diffMap = {}
  
  for (let val of arr) {
    diffMap[val - k] = val.toString()
  }
  
  for (let i = 0; i < arr.length; i++) {
    diffMap[arr[i]] && (res.push([parseInt(diffMap[arr[i]]), parseInt(arr[i])]))
  }
  
  return res
}

console.log(findPairsWithGivenDifference([0, -1, -2, 2, 1], 1))