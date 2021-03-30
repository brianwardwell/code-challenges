//In place

const reverseArr = (array) => {
    let rightIdx = array.length -1;
    for(i=0; i<rightIdx; i++) {
      let currentVal = array[i];
      let lastVal = array[rightIdx];
      array[i] = lastVal;
      array[rightIdx] = currentVal;
      rightIdx--
    }
    return array;
  }

  // Not in place
  const arr = [2,6,3,8,5]


const reverseArrNew = (array) => {
  const reversedArr = [];
  while (array.length) {
    let currentVal = array.pop();
    reversedArr.push(currentVal)
  }
  return reversedArr;
}

console.log(reverseArrNew(arr))