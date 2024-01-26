"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY

/* YOU MAY MODIFY THE LINES BELOW */
// num is the numbers of common letters in two words
let num = 0;

// convert each char in word to lowercase and store it
const charCount = {};
for (const c of word.toLowerCase()){
  charCount[c] = (charCount[c] || 0) + 1;
}

for (const s of guess.toLowerCase()){
  // check if the guess number in the charCount
  if(charCount[s] && charCount[s] > 0){
    num += 1;
    // remove one of its occurrence from charCount
    charCount[s] -= 1
  }
  // if not we continue to check next character
  else{
    continue;
  }
}
  return num; 
}
