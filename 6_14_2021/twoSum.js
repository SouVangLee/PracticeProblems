// 1. Two Sum - Easy

var twoSum = function(nums, target) {
  let tracker = {};
  for (let i = 0; i < nums.length; i++) {
      let complement = target - nums[i];
      if (tracker[complement] !== undefined) {
          return [tracker[complement], i];
      }
      tracker[nums[i]] = i;
  }
};