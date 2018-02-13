'use strict';

// function to check if a word is a palindrome

function checkWordPal(string) {
  let arr1 = string.toUpperCase().split('');
  let arr2 = [];
  for (let i = arr1.length - 1; i >= 0; i--) {
    arr2.push(arr1[i]);
  }
  return arr1.join() == arr2.join();
}

console.log(checkWordPal('tattarrattat'));



// function to check if a phrase or word is a palindrome

function checkPhrasePal(string) {
  let arr1 = [];
  let arr2 = [];
  for (let i in string) {
    if (/[a-zA-Z]+/.test(string[i])) {
      arr1.push(string[i].toLowerCase());
    }
  }
  for (let i = arr1.length - 1; i >= 0; i--) {
    arr2.push(arr1[i]);
  }
  // console.log('Input: ' + arr1.join(''), 'Reverse: ' + arr2.join(''));
  return arr1.join('') == arr2.join('');
}

console.log(checkPhrasePal('A man, a plan, a canal: Panama!'));