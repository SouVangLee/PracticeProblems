/*
13. Roman to Integer - Easy

1) Store each case as a key-value pair in a POJO, e.g. I = 1, V = 5
2) Initialize a variable to keep track of the sum;
3) Iterate through each roman numeral
4) Check the next roman to see if it is a V, X, L, C, D, or M.
5) If it is, grab the pair value from the POJO and add it to the sum
6) If it is not, just add the value of the current roman numeral to the sum
7) return sum
*/

var romanToInt = function(s) {
  counts = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
  }
  
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
      let current = s[i];
      let next = s[i + 1];
      if (s[i + 1] && counts[current] > counts[next]) {
          sum += counts[current];
      } else if (s[i + 1] && counts[current] < counts[next]) {
          sum += counts[next] - counts[current]
          i++;
      } else {
          sum += counts[current];
      }
  }
  return sum;
};