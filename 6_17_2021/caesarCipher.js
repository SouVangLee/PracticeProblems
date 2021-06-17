const caesarCipher = function(str, shift) {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  str.split("").forEach(char => {
    let idx = alpha.indexOf(char);
    let newIdx = idx + shift;
    if (newIdx > 25) {
      result += alpha[newIdx % 26];
    } else {
      result += alpha[newIdx];
    }
  });
  return result;
}