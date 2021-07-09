// Given an array of integers (positive and negative) find the largest contiguous subsum (sum of a subarray).

//[5, 3, -7, 6] => 8
//[5, 3, -7, 6, 4] => 11
//[5, 3, -7, -7, 6, 4] => 

const largestContiguousSubSum = function(arr) {
  if (!arr.length) return 0;

  let max = arr[0];
  let current = max;
  for (let i = 1; i < arr.length; i++) {
    current += arr[i];
    if (current > max) {
      max = current;
    } else if (current < 0){
      current = 0;
    }
  }
  return max;
}

console.log(largestContiguousSubSum([5, 3, -7, 6]));
console.log(largestContiguousSubSum([5, 3, -7, -7, 5, -3, 10, -8, 6, 4]));