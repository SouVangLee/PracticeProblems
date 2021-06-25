const mergeSort = function(arr) {
  if (arr.length === 1) return arr;
  let midIdx = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, midIdx));
  let right = mergeSort(arr.slice(midIdx));

  return merge(left, right);
}

const merge = function(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift())
    }
  }
  return sorted.concat(left, right);
}

console.log(mergeSort([5,2,1,8,9,4]));