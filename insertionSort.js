let cardArr = [9,7,10,8,3,5];

for (i=0; i<cardArr.length; i++) {
  while(cardArr[i-1] > cardArr[i]) {
  swap(cardArr, i, i-1)
      i--
    }
  }
function swap(arr, indexOne, indexTwo) {
  let largerNum = arr[indexOne]
  arr[indexOne] = arr[indexTwo]
  arr[indexTwo] = largerNum
};

console.log(cardArr)

// 1. pick up 1st card in arr
// 2. compare it to next card
// 3. if next card is less than current card, swap
// 4. while there is a card before the new current card (after swap), compare current card to card before it
//   a. if current card is less than card before it, swap
//   b. keep moving left until there is no value to check