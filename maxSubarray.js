// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

var maxSubArray = function(nums) {
    let highestSum = nums[0];
    
    if (nums.length === 1) return highestSum;
    for (i=0; i<nums.length; i++) {
        let totalCurrentSum = nums[i];
        if (nums[i] > highestSum) {
            highestSum = nums[i];
        }
        for (j=i+1; j<nums.length; j++) {
            totalCurrentSum += nums[j]
           
            if(totalCurrentSum > highestSum) {
                 highestSum=totalCurrentSum;
                  }
              }
        
    }
    return highestSum;
    
}

//SECONDARY O(N) SOLUTION
//  This rewrites the current subarray everytime the num is bigger than num + currentSum (meaning the current sum is negative)
var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let highestSum = nums[0];
    for (i=1; i<nums.length; i++) {
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i]
        } else {
            currentSum += nums[i]
        }
        if (currentSum > highestSum) {
            highestSum = currentSum;
        }
    }
    return highestSum;   
}