let unsortedArr = [8,6,3,9,3,2,4,5];

for (i=0; i<unsortedArr.length-1; i++) {
  const currentCardIndex = i;
  let smallestCardIndex = currentCardIndex;
  for(j=i+1; j<unsortedArr.length; j++) {
    if (unsortedArr[smallestCardIndex] > unsortedArr[j]) {
      smallestCardIndex = j; 
    }
  }
  //Put the swap logic after the for loop so I don't have to swap every single time j is less than i
  const smallestCard = unsortedArr[smallestCardIndex]
  unsortedArr[smallestCardIndex] = unsortedArr[currentCardIndex];
  unsortedArr[currentCardIndex] = smallestCard;
}