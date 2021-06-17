//167. Two Sum II - Input array is sorted

const twoSum = function(numbers, target) {
  let i = 0;
  let j = numbers.length - 1;
  while (true) {
    let sum = numbers[i] + numbers[j];
    if (i < j) {
      if (sum > target) j--;
      else if (sum < target) i++;
      else if (sum === target) {
        return [i + 1, j + 1];
      }
    } else return null;
  }
};