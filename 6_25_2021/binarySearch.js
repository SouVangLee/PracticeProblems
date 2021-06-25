// Given a sorted array of numbers and a target num, return the index of where the target is located in the array.
// If it does not exist, return -1;

const binarySearch = function(arr, target) {
  if (!arr.length) return -1;
  let midIdx = arr.length/2;
  
  if (arr[midIdx] === target) {
    return midIdx;
  } else if (arr[midIdx] > target) {
    return binarySearch(arr.slice(0, midIdx), target);
  } else {
    let subResult = binarySearch(arr.slice(midIdx + 1), target);
    return subResult === -1 ? -1 : subResult + midIdx + 1;
  }
}

console.log(binarySearch([2,4,6,7,10,15,17,19], 18));