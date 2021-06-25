// Write a method that finds all the unique substrings for a word.
//O(n^3)
const uniqSubs = function(str) {
  let results = [];

  for (let i = 0; i < str.length; i++) {
    let sub = str[i];
    for (let j = i; j < str.length; j++) {
      if (j !== i) {
        sub += str[j];
      }
      if (!results.includes(sub)) {
        results.push(sub);
      }
    }
  }
  return results;
}

console.log(uniqSubs('cacatt'));