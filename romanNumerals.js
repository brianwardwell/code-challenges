const romanNumeral = 'MMMCMXCIX'

var romanToInt = function(s) {
    const romanStringArr = s.slice().split('')
    let romanNumberArr = [];
    let sum = 0
    for (i=0; i<romanStringArr.length; i++) {
      
      if (romanStringArr[i] === 'I') {
        romanNumberArr[i] = '1'
      } else if (romanStringArr[i] === 'V') {
        romanNumberArr[i] = '5'
      } else if (romanStringArr[i] === 'X') {
        romanNumberArr[i] = '10'
      } else if (romanStringArr[i] === 'L') {
        romanNumberArr[i] = '50'
      } else if (romanStringArr[i] === 'C') {
        romanNumberArr[i] = '100'
      } else if (romanStringArr[i] === 'D') {
        romanNumberArr[i] = '500'
      } else if (romanStringArr[i] === 'M') {
        romanNumberArr[i] = '1000'
      }
    }
  const romanIntArr = romanNumberArr.map(num => parseInt(num))
  for (i=0; i<romanIntArr.length; i++) {
    console.log('fly', sum)
    if (romanIntArr[i] === 1 && romanIntArr[i+1] === 5) {
      sum += (romanIntArr[i+1] - romanIntArr[i])
      i++
    } 
    else if (romanIntArr[i] === 1 && romanIntArr[i+1] === 10) {
      sum += (romanIntArr[i+1] - romanIntArr[i])
      i++
    } 
    else if (romanIntArr[i] === 10 && romanIntArr[i+1] === 50) {
      sum += (romanIntArr[i+1] - romanIntArr[i])
      i++
    } 
    else if (romanIntArr[i] === 10 && romanIntArr[i+1] === 100) {
      sum += (romanIntArr[i+1] - romanIntArr[i])
      i++
    } 
    else if (romanIntArr[i] === 100 && romanIntArr[i+1] === 500) {
      sum += (romanIntArr[i+1] - romanIntArr[i])
      i++
    } 
    else if (romanIntArr[i] === 100 && romanIntArr[i+1] === 1000) {
      sum += (romanIntArr[i+1] - romanIntArr[i])
      i++
    } 
    else {
      sum += romanIntArr[i]
    }
   }
};

romanToInt(romanNumeral)
  

// Convert roman numeral input into an integer output
// Input: 
// -	Single string 
// -	At least 1 string, max of 15
// -	Sum of RN will be between 1 and 3999
// -	I, X, C are only RN’s that will subtract from the number to the right of them
// Test:
// -	xxIV = 24
// -	mmmcmxcix = 3999
// Pseudo:
// 1.	put s input into an array of separate strings (per RN character)
// 2.	convert each string in the array to an integer
// 3.	if num is a 1 & next is a 5 or 10, subtract 1 from next num in array and add this new value to a new array
// 4.	repeat 3 for x and c subtraction scenarios 
// 5.	if step 3 and 4 scenarios don’t apply, add the 2 numbers together and add the value to the new array
// 6.	sum the new array