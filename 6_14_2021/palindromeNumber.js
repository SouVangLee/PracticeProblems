//9. Palindrome Number - Easy
var isPalindrome = function(x) {
  if (x < 0) return false;
  if (x < 10) return true;
  if (x % 10 === 0) return false;
  
  let reverse = 0;
  let current = x;
  while (current > 0) {
      reverse *= 10;
      reverse += (current % 10);
      current = Math.floor(current/10);
  }
  return reverse === x;
};