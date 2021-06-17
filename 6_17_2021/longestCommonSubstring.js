const longestCommonSubstring = function(str1, str2) {
  let longest = "";
  for (let i = 0; i < str1.length; i++) {
    let current = str1[i];
    for (let j = i; j < str1.length; j++) {
      if (j !== i) current += str1[j];
      if (!str2.includes(current)) {
        current = "";
        break;
      } else if (str2.includes(current) && current.length > longest.length) {
        longest = current;
      }
    }
  }
  return longest;
}