'use strict';

// iterative method
// time complexity is O(n) or linear
// space complexity is O(1) or constant
function fib(pos) {
  if (pos < 2) return pos;
  let sLast = 0;
  let last = 1;
  let currPosition = 2;
  let temp;
  while (currPosition <= pos) {
    temp = last;
    last = last + sLast;
    sLast = temp;
    currPosition++;
  }
  return 'Position ' + pos + ' in the Fibonacci series is ' +last;
}

console.log(fib(10));