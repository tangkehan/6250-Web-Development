const express = require('express')
const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid').v4;
const PORT = 3000;
const app = express();
const webPages = require('./web-pages');
const words = require('./words');
const guess = require('./gameLogic');

app.use(express.static('./public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// associate username with the game process
const gamers = {}

// associate sid with the username
const sessions = {};

app.get('/', (req, res) => {
    const sid = req.cookies.sid;

    // if user already logged in
    if (sid&&(sid in sessions)&&sessions[sid].username ){
        const username = sessions[sid].username;
        return res.send(webPages.guessPage(username, words, gamers[username].guessedWords, 
                        gamers[username].validGuessNum, gamers[username].recentGuess,
                        gamers[username].gameStatus));
    }

    return res.send(webPages.loginPage(""));
});

app.post('/login', (req, res) => {
    const username = req.body.username.trim();
    const regex = /^[a-zA-Z0-9]+$/;
    if (username === 'dog'){
        return res.send(webPages.loginPage("Invalid Username. Vaild username can only be made up with numbers or letters only."));
    }
    else if (!username || !username.match(regex)){
        return res.send(webPages.loginPage("Invalid Username. Vaild username can only be made up with numbers or letters only."));
    }
    else{
        const sid = uuidv4();  
        sessions[sid] = { username: username };
        // if it's new user, let's start the new game
        if (!gamers[username]) {
            guess.startNewGame(gamers, username, words);
            // help for grading 
            console.log('Username: ',username);
            console.log('Secret word: ', gamers[username].secretWord);
        }
        res.cookie('sid', sid);
        res.redirect('/');
    }
})

app.post('/guess',  (req, res) => {
    const guessWord = req.body.guess.trim();
    const sid = req.cookies.sid;
    // If there is not a valid session id, the page will display a message and a login form
    if (!sid || !(sid in sessions) || !sessions[sid].username){
        return res.send(webPages.loginPage("Invalid Session Id. Please login to access this page."));
    }

    const username = sessions[sid].username;
    if (!guess.isValidGuess(words, gamers[username].guessedWords,guessWord, gamers[username].gameStatus)){
        gamers[username].gameStatus = 'notValidGuess';
        res.redirect('/');
    }
    else{
        gamers[username].recentGuess = guessWord.toLowerCase();
        gamers[username].validGuessNum += 1;
        const guessResult = guess.takeGuess(guessWord, gamers[username].secretWord, 
                        gamers[username].guessedWords,
                        gamers[username].recentGuess);
        if (guessResult){
            gamers[username].gameStatus = 'correct';
        }
        else{
            gamers[username].gameStatus = 'wrong';
        }
      
        res.redirect('/');
    }
 
})

app.post('/new-game', (req, res) => {
    //check for a valid session id
    const sid = req.cookies.sid;
    if (!sid || !(sid in sessions) || !sessions[sid].username){
        return res.send(webPages.loginPage("Invalid Session Id. Please login to access this page."));
    }
    const username = sessions[sid].username;
    guess.startNewGame(gamers, username, words);  
    // help for grading 
    console.log('Username: ',username);
    console.log('Secret word: ', gamers[username].secretWord);
    res.redirect('/');
})


app.post('/logout', (req, res) => {
    const sid = req.cookies.sid;
    res.clearCookie('sid');
    delete sessions[sid];
    res.redirect('/');
})



app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
