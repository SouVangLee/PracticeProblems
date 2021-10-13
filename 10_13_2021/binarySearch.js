arr = [2,3,6,7,10,13,17,21]
target1 = 17;
target2 = 3;
target3 = 22;
target4 = 1;

function binarySearch(arr, target) {
  if (arr.length <= 1) return -1;
  let midIdx = Math.floor(arr.length / 2);

  if (target < arr[midIdx]) {
    return binarySearch(arr.slice(0, midIdx), target);
  } else if (target === arr[midIdx]) {
    return midIdx;
  } else {
    let subResult = binarySearch(arr.slice(midIdx + 1), target);
    return subResult === -1 ? -1 : subResult + midIdx + 1;
  }
}

console.log(binarySearch(arr, target1));
console.log(binarySearch(arr, target2));
console.log(binarySearch(arr, target3));
console.log(binarySearch(arr, target4));
