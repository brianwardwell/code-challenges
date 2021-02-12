// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

var twoSum = function(nums, target) {
    
    for (i=0; i < nums.length; i++) {
        
        for (j=i + 1; j < nums.length; j++) {
        
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};