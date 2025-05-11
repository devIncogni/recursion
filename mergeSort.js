function mergeSort(unsortedArr) {
  let sortedArray = [];

  if (unsortedArr.length === 1) {
    return unsortedArr;
  }

  const mid = Math.floor(unsortedArr.length / 2);
  const leftSortedArray = mergeSort(unsortedArr.slice(0, mid));
  const rightSortedArray = mergeSort(unsortedArr.slice(mid));

  let i = 0,
    j = 0;

  while (i < leftSortedArray.length && j < rightSortedArray.length) {
    if (leftSortedArray[i] < rightSortedArray[j]) {
      sortedArray.push(leftSortedArray[i]);
      i = i + 1;
    } else {
      sortedArray.push(rightSortedArray[j]);
      j = j + 1;
    }
  }
  return sortedArray
    .concat(leftSortedArray.slice(i))
    .concat(rightSortedArray.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
