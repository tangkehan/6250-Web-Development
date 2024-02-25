// webPage() returns the HTML for the page
const webPages = {

    loginPage: function(errorMessage){
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" type="text/css" href="/styles.css">
                <title>Login</title>
            </head>
            <body>
                <div class = "container">
                    <h1>Login</h1>
                    ${errorMessage ? `<p class="error-message">${errorMessage}</p>` : ''}
                    <form action="/login" method="POST">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username">
                        <button type="submit">Login</button>
                    </form>
                </div>
            </body>
            </html>
        `;
    },



    guessPage: function(username, words, guessedWords, validGuessNum, recentGuess, gameStatus){
        
        // const wordsList = words.map(word => `<li>${word}</li>`).join('');
        const wordsList = words.map(word => `<li class="${word in guessedWords ? 'guessed-word' : ''}">${word}</li>`).join('');
  
        
        let guessedWordsHTML = '';
        if (gameStatus != 'NewStart'){
            for (const [key, value] of Object.entries(guessedWords)) {
                guessedWordsHTML += `<li>${key} (Matched: ${value})</li>`;
            };
        }

        const recentGuessHTML = recentGuess ? `${recentGuess} (Matched: ${guessedWords[recentGuess]})` : '';

        let message = '';
        if (gameStatus === 'correct') {
            message = 'Yeah, You win the game!';
        } else if (gameStatus === 'wrong'){
            message = 'Guess wrong. Make another guess!';
        }else if (gameStatus === 'notValidGuess'){
            message = 'Not valid guess, Make another guess!';
        }
        else{
            message = '';
        }

        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" type="text/css" href="/styles.css">
            <title>Guessing Game</title>
        </head>
        <body>
            <div class = "container">
                <h1>${username}, Welcome to the Guessing Game</h1>

                <div class = 'words-container'>
                    <h2 class = 'word-list-title'>Words List: </h2>
                    <ul class="words-list">${wordsList}</ul>
                </div>
                <p>Guessed Words List: </p>
                <ul class="${gameStatus === 'NewStart' ? '' : 'guessed-words-list'}">${guessedWordsHTML}</ul>
                <p>Valid Guesses Number: ${validGuessNum}</p>
                <p>Recent Guessed Word: ${recentGuessHTML}</p>
                <div class = "guess-container">
                    <form class = "guess" action="/guess" method="POST">
                        <label for="guess">Make a Guess:</label>
                        <input type="text" id="guess" name="guess">
                        <button type="submit">Submit Guess</button>
                    </form>
                    <p class = "message">${message}</p>
                </div>
                <div class="button-container">
                    <form class = "new-game" action="/new-game" method="POST">
                        <button type="submit">Start New Game</button>
                    </form>
                    <form class = "logout" action="/logout" method="POST">
                        <button type="submit">Logout</button>
                    </form>
                </div>
            <div>
        </body>
        </html>
        `;
    }
}

module.exports = webPages;