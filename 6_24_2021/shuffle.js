// You are given an array and a random number generator. Shuffle the array.

const shuffle = function(arr) {
  let copy = arr.map(ele => ele);
  for (let i = 0; i < copy.length; i++) {
    let newIdx = Math.floor(Math.random() * copy.length);
    [copy[i], copy[newIdx]] = [copy[newIdx], copy[i]];
  }

  return copy;
}

console.log(shuffle([1,2,3,4,5,6,7,8,9]));