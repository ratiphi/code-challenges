'use strict';

// function to reverse a string in place
// in JS strings are immutable.  You cannot assign a value to a string by index (ie. str[0]= 'j')
// therefore you MUST split the string into an array and reverse the array in place.  

function revStrInPlace(string) {
  let arr = string.split('');
  let start = 0;
  let end = arr.length - 1;
  console.log(start, end);
  console.log(arr[start], arr[end]);

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start = start + 1;
    end = end - 1;
  }
  return 'Input: ' + string + '    Output: ' + arr.join('');
}

console.log(revStrInPlace('Hello my name is Tim'));