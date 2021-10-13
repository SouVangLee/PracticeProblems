arr = [5, 7, 2, 1, 3, 4, 9, 8] //output = [1, 2, 3, 4, 5, 7, 8, 9]

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let midIdx = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx);
  let leftSort = mergeSort(left);
  let rightSort = mergeSort(right);

  return merge(leftSort, rightSort);
}

function merge(left, right) {
  let sorted = [];
  while (left.length || right.length) {
    let leftEle = left.length ? left[0] : Infinity;
    let rightEle = right.length ? right[0] : Infinity;
    if (leftEle < rightEle) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return sorted
}

console.log(mergeSort(arr));