function compare( word, guess ) {  
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

export { compare };
    