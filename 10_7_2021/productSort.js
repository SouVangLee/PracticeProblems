//Sort the array of values by least frequent to most frequent and then by ascending order
const arr = [3,4,6,5,4,5, 2, 1] //output: [3,6,4,4,5,5]
const arr2 = [1,1,1,3,3,4,5,6,7,9,1,2,3,5,6,7,8] 

function productSort(arr) {
  const frequency = {};
  const countArr = [];
  const result = [];

  arr.forEach(num => {
    if (!frequency[num]) frequency[num] = 0;
    frequency[num]++;
  });

  for (const key in frequency) {
    countArr.push([parseInt(key), frequency[key]])
  }

  countArr.sort((a, b) => a[1] - b[1]);
  for (const [value, count] of countArr) {
    for (let i = 0; i < count; i++) {
      result.push(value);
    }
  }
  return result;
}


console.log(productSort(arr));
console.log(productSort(arr2));