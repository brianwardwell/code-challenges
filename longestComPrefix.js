// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 0 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

//Understand:
// input: array of between 0 and 200 strings
//     array can be empty
//     each array item could potentially be an empty string
// output: single string including letters that the beginning of all of the words have in common
// 

//Test:
// ['bat', 'bag', 'bagel'] --> 'ba'
// [''] --> ''
// ['', 'bat', 'bag', 'bagel'] --> ''

//Pseudo:
//  if arrays length is less than 1, return empty string
//  check first letter of each word
//  if first letters are all the same add that letter to the solution string
//  repeat for all of the letters in the first word
//  return the solution string

//letter = 0
// word = 1
// is word at index letter equal the value at the letter index

var longestCommonPrefix = function(strs) {
    if (!strs.length) return ''
 for (letterIndex=0; letterIndex<strs[0].length; letterIndex++) {
    for (wordIndex=1; wordIndex<strs.length; wordIndex++) {
      if (strs[0][letterIndex] !== strs[wordIndex][letterIndex] ) {
        return strs[0].slice(0,letterIndex)
      }
    }
    } 
  return strs[0]
};
