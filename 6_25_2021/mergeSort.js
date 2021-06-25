const mergeSort = function(arr) {
  if (arr.length <= 1) return arr;
  let midIdx = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midIdx));
  let right = mergeSort(arr.slice(midIdx));

  return merge(left, right);
}

const merge = function(left, right) {
  let sorted = [];
  while (left.length || right.length) {
    let ele1 = left.length ? left[0] : Infinity;
    let ele2 = right.length ? right[0] : Infinity;
    if (ele1 < ele2) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift())
    }
  }
  return sorted;
}

console.log(mergeSort([5,2,1,8,9,4,7, -1]));