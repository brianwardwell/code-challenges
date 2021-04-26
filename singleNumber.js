var singleNumber = function(nums) {
    // input: non empty array of ints
    // output: integer
    let foundObject = {};
    //create foundOnce variable
    let foundOnce
    // iterate over number array
    for (let i=0; i<nums.length; i++) {
        // save each value that I find
        if (foundObject[nums[i]]){
            foundObject[nums[i]] = 2;
        } else {
            foundObject[nums[i]] = 1;
            foundOnce = nums[i];
        }
    }
    return foundOnce;
        // update foundOnce variable 
        // if I find this number again, change the times found variable to 2
        // if the number I found again is equal to the current foundOnce variable, reset foundOnce variable
    // return foundOnce
    
};