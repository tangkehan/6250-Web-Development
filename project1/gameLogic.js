// cite： below three functions come from assignment 03
function pickWord(wordList) {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

function exactMatch(word, guess) {
    return word.toUpperCase() === guess.toUpperCase(); 
}

function compare( word, guess ) {  
    let num = 0;
    const charCount = {};
    for (const c of word.toLowerCase()){
      charCount[c] = (charCount[c] || 0) + 1;
    }
    
    for (const s of guess.toLowerCase()){
      if(charCount[s] && charCount[s] > 0){
        num += 1;
        charCount[s] -= 1;
      }
      else{
        continue;
      }
    }
      return num; 
}
function startNewGame(gamers, username, words){
    const secret = pickWord(words)
    gamers[username] = {
        secretWord: secret,
        guessedWords: {}, 
        validGuessNum:0,
        recentGuess:'',
        gameStatus:'NewStart'
    };
}

function isValidGuess(words, guessedWords, newGuessWord){
    if (newGuessWord.toLowerCase() in guessedWords || !words.includes(newGuessWord.toLowerCase())){
        return false;
    }
    return true;
}
    
function takeGuess(guess, targetWord, guessedWords, recentGuess) { 
    if (exactMatch(targetWord, guess)){
        guessedWords[guess.toLowerCase()] = compare(targetWord, guess);
        return true;
    }
    else{
        const matchedLetters = compare(targetWord, guess);
        guessedWords[guess.toLowerCase()] = matchedLetters;
        return false;
    }
}

module.exports = {startNewGame, isValidGuess, takeGuess };