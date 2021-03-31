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