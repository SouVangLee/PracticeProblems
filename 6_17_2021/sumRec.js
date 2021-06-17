const sumRec = function(nums) {
  if (!nums.length) return 0;
  return nums.shift() + sumRec(nums);
}

console.log(sumRec([1,2,3]));