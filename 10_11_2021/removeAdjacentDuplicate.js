// abbacd => cd
// xyxzzabba => xyx

// function removeAdjacentDuplicates(string) {
//   const stack = [];
//   const chars = string.split('');
//   for (let i = 0; i < chars.length; i++) {
//     const char = chars[i];
//     const current = stack[stack.length - 1];
//     if (current !== char) {
//       stack.push(char);
//     } else {
//       stack.pop();
//     }
//   }
//   return stack.join('');
// }

//k = the number of adjacent duplicates before removing
function removeAdjacentDuplicates(string, k) {
  const counts = [];
  const letters = [];
  const chars = string.split('');

  for (let i = 0; i < chars.length; i++) {
    const current = chars[i];
    let count = counts[counts.length - 1];
    const lastChar = letters[letters.length - 1];

    if (lastChar !== current) {
      letters.push(current);
      counts.push(1);
    } else {
      count++;
      counts[counts.length - 1] = count;
      if (count === k) {
        letters.pop();
        counts.pop();
      }
    }
  }
  return letters.join('');
}

console.log(removeAdjacentDuplicates('abbbaabcd', 2));
console.log(removeAdjacentDuplicates('xyxzzzxxabba', 2));