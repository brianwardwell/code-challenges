//start with the right side of each binary strings and iterate backwards
    //if they are both 1's, add a 0 to the beginning of the solution string and carry a 1 to the left
        // if there are three 1's, add a 1 to the beginning of the solutions string and carry a 1 to the left again
        // if there are 2 ones and a 0, put a 0 on the beginning and carry a 1
        // if there is one 1, put a 1 on the beginning an don't carry
        // if there are two 0's, put a zero on the beginning and don't carry
    //return the solution string

    // Second pseudo after realizing I should add the actual numbers together:

    //start with the right side of each binary string and iterate backwards
      //turn string into a number and add them together including the carry which will initialize at 0
          // if the sum is 3, add a 1 to the beginning of the solutions string and carry a 1 to the left again
          // if the sum is 2, put a 0 on the beginning and carry a 1
          // if the sum is 1, put a 1 on the beginning an don't carry
          // if the sum is 0, put a zero on the beginning and don't carry
      //return the solution string

var addBinary = function(a, b) {
    let splitA = a.split('');
    let splitB = b.split('');
    console.log(splitA, splitB)
    let carry = 0;
    let solution = [];
    let indexA = splitA.length-1;
    let indexB = splitB.length-1;
      
    while (indexA >=0 || indexB >= 0) {
        let sum = carry + (indexA >= 0 ? parseInt(splitA[indexA]) : 0) + (indexB >= 0 ? parseInt(splitB[indexB]) : 0)
        indexA--;
        indexB--;
        if (sum === 0) {
          solution.unshift('0')
            carry = 0;
        } else if (sum === 1) {
          solution.unshift('1')
            carry = 0;
        } else if (sum === 2) {
          solution.unshift('0')
          carry = 1;
        } else {
          solution.unshift('1') 
            carry=1;  
        }
        }
      if (carry) solution.unshift('1')
    return solution.join('');   
  };