/*
  Write a function, fibs(num) which returns the first n elements from the fibonnacci sequence, given n.
*/

//O(n)
const fibs = function(n) {
  if (n < 1) return [];
  if (n === 1) return [1];

  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib.push((fib[fib.length - 1] + fib[fib.length - 2]));
  }
  return fib;
}

//recursive O(n)
const fibs_recursive = function(n) {
  if (n < 1) return [];
  if (n === 1) return [1];
  if (n === 2) return [0, 1];

  let prev = fibs(n - 1);
  prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
  return prev;
}

console.log(fibs_recursive(3));