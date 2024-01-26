"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY

/* YOU MAY MODIFY THE LINES BELOW */
// num is the numbers of common letters in two words
let num = 0;

// convert each char in word to lowercase and store it in a list
const wordList = [];
for (const c of word.toLowerCase()){
  wordList.push(c);
}

for (const s of guess.toLowerCase()){
  // check if the guess number in the wordlist
  if(wordList.includes(s)){
    num += 1;

    // get the index of this character in wordlist 
    // and remove its occurrence from wordList
    const index = wordList.indexOf(s);
    wordList.splice(index, 1);
  }
  // if not we continue to check next character
  else{
    continue;
  }
}
  return num; 
}
