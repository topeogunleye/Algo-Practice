/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//
//     let index1 = 0;
//     let index2 = 0;
//
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++)
//             if (nums[i] + nums[j] == target) {
//                 index1 = i
//                 index2 = j
//             }
//     }
//
//     return [index1, index2]
// };

// using a hash table
var twoSum = function(nums, target) {

    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        // if the difference between the target and the current number is in the hash table
        let complement = target - nums[i];
        if (complement in hash) {
            return [hash[complement], i];
        }
        hash[nums[i]] = i;
    }
};

console.log(twoSum([2, 7, 11, 15], 9))