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
//  Iterate through array and turn each item into an array of strings
//  Iterate again over the new arrays of strings, if first indexes in each array match, save them
//  Repeat above step until the indexes don't match, return saved object of matching letters

let strs = ["flower","flow","flight"]

for (i=0; i<strs.length; i++) {
  if strs[0][i] === strs[1][i] && strs[2][i] === strs[0][i]
}