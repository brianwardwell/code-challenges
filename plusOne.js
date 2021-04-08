var plusOne = function(digits) {
    let concat = digits.join('');
    
    let concatNum = parseInt(concat);
    
    concatNum += 1;
    let concatNumStr = concatNum.toString().split('');
    const plusOneArr = concatNumStr.map(num => {
       return parseInt(num);
    })
    
    return plusOneArr;
};

//Solution without modulo

var plusOne = function(digits) {
    for (i=digits.length-1; i>=0; i--) {
        if (digits[i] !==9) {
            ++digits[i]
            return digits;
        } else if (digits[i] === 9) {
            digits[i] = 0;
        } 
    }
     digits.unshift(1)
     return digits;
 };