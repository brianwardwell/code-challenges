// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]
// Notes
// All test arrays will have at least one element and are valid.

function minMax(arr) {
    console.log('Original', arr)
    if (arr.length === 1) {
        const singleArr = [arr[0], arr[0]]
        return singleArr
    } else {
        const sortedArr = arr.sort( (a, b) => {
            if (a > b) {
                return 1
            } else if (a < b) {
                return -1
            } else {
                return 0
            }
        })
        const solutionArr = [sortedArr[0], sortedArr[sortedArr.length - 1]]
        console.log('Solved', solutionArr)
        return solutionArr
    }
}
//I got stuck trying to create a custom sort (selection, bubble, etc.) which took about an hour until i decided to use the .sort() method
//Completion time 1 hour 44 mins