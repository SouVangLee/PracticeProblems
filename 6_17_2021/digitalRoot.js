const digitalRoot = function(num) {
  while (num > 10) {
    num = digitalRootStep(num);
  }
  return num;
}

const digitalRootStep = num => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  } 
  return sum;
}