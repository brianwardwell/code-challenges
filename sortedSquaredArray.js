// Input: array of ints sorted in ascending order 
// Output: array of squared ints in ascending order

// Array is non empty

// Ex: 
// Input - [2,4,6]
// Output - [4,16, 36]

// 1) Start with first number and square it, send it to new array 
// 2) move to second number and repeat step 1.
// 3) Repeat until the end of array.


function sortedSquaredArray(array) {
    // Write your code here.
      console.log("array", array)
      const sqArr = array.map(num => {
          return num * num
      })
      let solutionArr = sqArr.sort(function compare(a, b) {
          return a-b
      })
      console.log('solution', solutionArr)
    return solutionArr;
  }
  
