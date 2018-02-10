'use strict';

// iterative method
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