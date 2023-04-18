const twoSums = (nums, target) => {

  // create an object to store the indices of the nums elements
  const indices = {};

  // loop through our array

  for (let i = 0; i < nums.length; i++) {
    
    // get the difference between target and nums[i]

    let diff = target - nums[i];

    // if diff is in indices, return [indices[diff], i]

    if (indices[diff] !== undefined) {
      return [indices[diff], i]
    } else {
      indices[nums[i]] = i
      console.log(indices[nums[i]])
    }
     
  }
} 


console.log(twoSums([2,7,11,15], 9))