/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // input x is an integer
    //  return x reversed
    // x within -2(32) and 2(32) - 1, if not, return 0
    
    function isNeg (x) {
        if (x < 0) {
            return true
        } else {
            return false
        }
    }
    console.log('isNeg', isNeg(x))
   let upperLimit = Math.pow(2, 31) -1
   let lowerLimit = Math.pow(-2, 31) 
   console.log(upperLimit, lowerLimit)
   let numStr = x.toString().split('')
   let revArr = numStr.reverse()
   let revIntStr = revArr.join('')
   let revInt = parseInt(revIntStr)
   isNeg(x) ? revInt = revInt * -1 : revInt = revInt * 1
   if (revInt > upperLimit || revInt < lowerLimit) {
       return 0
   } else {
   return revInt
   }
};