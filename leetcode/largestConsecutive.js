// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

var largestConsecutive = function(nums) {
    let set = new Set(nums);
    let longest = 0;
    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;
            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }
            longest = Math.max(longest, currentStreak);
        }
    }
    return longest;
};

console.log(largestConsecutive([100,4,200,1,3,2])) // 4