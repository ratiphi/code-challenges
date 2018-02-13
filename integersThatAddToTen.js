'use strict';

// function that returns the first 2 integers that add up to 10 in a given array of integers

const arr = [1, 4, 8, 5, 7, 2, 6];

// first solution - time complexity is O(n^2)
function sumToTen(array) {
  for (let i in array) {
    let currTarget = array[i];
    for (let j in array) {
      if (currTarget + array[j] === 10) {
        return [currTarget, array[j]];
      }
    }
  }
  return false;
}
console.log(sumToTen(arr));


// second solution - trying for time complexity O(n)
// this only gives O(n) if you assume array.includes() is constant lookup time, as in a hash table backed set data structure
// as far as I can tell, the set in JS is not backed by a hash table so this isnt possible in JS
function sumToTen2(array) {
  for (let i in array) {
    if (array.includes(10 - array[i])) {
      return [array[i], 10 - array[i]];
    }
  }
  return false;
}
console.log(sumToTen2(arr));