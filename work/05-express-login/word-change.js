

function getStoredWord(words, username){
    return words[username].word;
}

function changeWord(words, username, newWord){
    words[username].word = newWord;
}

module.exports = { getStoredWord, changeWord };