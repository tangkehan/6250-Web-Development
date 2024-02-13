const express = require('express')
const cookieParser = require('cookie-parser');
const uuidv4 = require('uuid').v4;
const PORT = 3000;
const app = express();
const webPages = require('./web-pages');
const wordInfo = require('./word-change');

app.use(express.static('./public'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// associate username with the stored word
const words= {};
// associate sid with the username
const sessions = {};

app.get('/', (req, res) => {
    const sid = req.cookies.sid;

    // if user already logged in, send the data page
    if (sid && (sid in sessions) &&sessions[sid].username ){
        const username = sessions[sid].username;
        const storedWord = wordInfo.getStoredWord(words, username);
        return res.send(webPages.dataPage(username, storedWord));
    }

    return res.send(webPages.loginPage());
});

app.post('/login', (req, res) => {
    const username = req.body.username.trim();
    const regex = /^[a-zA-Z0-9]+$/;
    if (username === 'dog'){
        return res.status(403).send(webPages.loginErrorPage());
    }
    else if (!username || !username.match(regex)){
        return res.status(400).send(webPages.loginErrorPage());
    }
    else{
        const sid = uuidv4();  
        sessions[sid] = { username: username };
        // if it's new user, set the word to empty string
        if (!words[username]) {
          words[username] = { word: '' };
        }

        res.cookie('sid', sid);
        res.redirect('/');
    }
})


app.post('/change',  (req, res) => {
    const newWord = req.body.newWord.trim();
    const sid = req.cookies.sid;
    const username = sessions[sid].username;
    wordInfo.changeWord(words, username, newWord);
    res.redirect('/');
})

app.post('/logout', (req, res) => {
    const sid = req.cookies.sid;
    res.clearCookie('sid');
    delete sessions[sid];
    res.redirect('/');
})



app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
