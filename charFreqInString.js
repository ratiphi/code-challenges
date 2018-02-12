'use strict';

// function to count the frequency of a character in a string
// uses a JS object to approximate a hashtable 

function charFreqInStr(string) {
  let ht = {};
  for (var i in string) {  
    let char = string[i];
    // ht[char] = (ht[char] || 0) + 1;
    if (!ht[char]) {
      ht[char] = 0;
    }
    ht[char]++;
  }

  var charMost = ['', 0];
  for (var key in ht) {
    if (ht[key] > charMost[1]) {
      charMost[0] = key;
      charMost[1] = ht[key];
    }
  }
  return charMost;
}

console.log(charFreqInStr('this is a string'));