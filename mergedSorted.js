var merge = function(nums1, m, nums2, n) {
    
    //input: 2 arrays of int's
    //output: 1 array of int's
    
    //compare the last value in each array (for the nums1 array, it will be m-1)
    let lastIndex = (m+n) - 1;
    while (n > 0 && m > 0) {
        if (nums1[m-1] > nums2[n-1]) {
            nums1[lastIndex] = nums1[m-1]
            m --;
        } else {
            nums1[lastIndex] = nums2[n-1];
            n --; 
        }
        lastIndex --;
    }
    while (n > 0) {
        nums1[lastIndex] = nums2[n-1];
        n --;
        lastIndex --
    }
    return nums1;
        //if the nums1 val is greater, move it to the end of the nums1 array --> move to the left one in nums 1 arr
        //if the nums 2 val is greater, set it's value to the last index in nums1 arr --> move to the left one in nums2 arr
    //if the nums1 arr ends first, add the remaining nums2 values to nums1 in order (from right to left)
};