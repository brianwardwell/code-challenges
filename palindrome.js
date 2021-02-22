var isPalindrome = function(x) {
    let xArr = x.toString().split('');
    let forwardArr = xArr;
    //Used slice because it createss a shallow copy array.  Reverse() is desctructive and will rewrite xArr in memory.
    let backwardArr = xArr.slice(0).reverse();
    
    for (i=0; i<forwardArr.length; i++) {
        if (forwardArr[i] !== backwardArr[i]) {
            return false
        }
    }
    return true
};