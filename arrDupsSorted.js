var removeDuplicates = function(nums) {
    let i=0
    for (let j = 0; j < nums.length; j++) {
       if (nums[j] != nums[i]) {
           i++;
           nums[i] = nums[j]
       }
    }
        console.log('IIII', i)
     console.log('NUMS', nums)
        return i+1
     
 };