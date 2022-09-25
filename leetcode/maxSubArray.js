/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    if (nums.length < 2 ) return nums

    let max = nums[0]
    let current = nums[0]

    for (let i = 1; i < nums.length; i++) {
        // console.log(nums[i], current, nums[i])
        // if the current number is greater than the current sum, then start a new sum
        // otherwise, add the current number to the current sum
        current = Math.max(nums[i], current + nums[i])
        // console.log(current)
        max = Math.max(max, current)
        console.log(max)
    }

    return max

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))