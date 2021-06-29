function heapSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }
  console.log(arr);

  //keep deleting the max until the heap is empty
  for (let endOfHeap = arr.length - 1; endOfHeap >= 0; endOfHeap--) {
    swap(arr, 0, endOfHeap);
    heapify(arr, endOfHeap, 0);
  }

  return arr;
}

function heapify(array, n, i) {
  let leftIdx = 2 * i + 1;
  let rightIdx = 2 * i + 2;
  let leftVal = array[leftIdx];
  let rightVal = array[rightIdx];

  if (leftIdx >= n) leftVal = -Infinity;
  if (rightIdx >= n) rightVal = -Infinity;
  if (array[i] > leftVal && array[i] > rightVal) return;

  let swapIdx = (leftVal > rightVal) ? leftIdx : rightIdx;
  swap(array, i, swapIdx);
  heapify(array, n, swapIdx);
}

function swap(array, i, j) {
  [ array[i], array[j] ] = [ array[j], array[i] ];
}

let arr = [7, 9, 6, 10, 20, 4, 8, 21];
console.log(heapSort(arr));