/*
Write a JavaScript function that takes a string and returns true if it's a palindrome, false if it's not.
*/

//racecar

const isPalindrome = function(str) {
  let newStr = str.toLowerCase().split(" ").join("");

  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) return false;
  }
  return true;
}

console.log(isPalindrome("raceeecar"));