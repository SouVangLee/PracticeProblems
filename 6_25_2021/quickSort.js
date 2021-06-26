const quickSort = function(arr) {
  if (arr.length <= 1) return arr;
  
  let midIdx = Math.floor(arr.length / 2)
  let pivot = arr[midIdx];
  arr.splice(midIdx, 1);
  let left = arr.filter(el => el < pivot);
  let right = arr.filter(el => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return leftSorted.concat(pivot, rightSorted);
}

console.log(quickSort([7,1,4,6,3,12,11,8,9]));