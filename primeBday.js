const arr = [88, 44, 187, -8, 44]

// const primeNum = (array) => {
//   const target = 8;
//   const primeArr = [];
//   for (const num in array) {
//     if (array[num].includes(target) && array[num].prime() === true)
//     primeArr.push(array[num])
//   }
//   console.log(primeNum)
//   return primeArr;
// }

// primeNum(arr)

// let str = '111';

// console.log(parseInt(str, 2))
const primeFunc = (array) => {
    const target = '8';
    const eightArr = []
    for (i=0; i<arr.length; i++) {
      console.log('how many')
      if (arr[i].toString().includes(target)) {
        let num = parseInt(arr[i])
        let isPrime = true;
        for (j=2; j<num; j++) {
          if (num % j === 0) {
            isPrime = false;
          } else if (isPrime === true) {
            console.log('getting here?')
            eightArr.push(num)
          }
        }
      } 
    }
      console.log('8Arr', eightArr)
    }
    primeFunc(arr)