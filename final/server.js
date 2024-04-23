
const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = 3000;
const app = express();

const sessions = require('./sessions');
const users = require('./users');
const messages = require('./messages');

app.use(cookieParser());
app.use(express.static('./dist'));
app.use(express.json()); 

//check for existing session
app.get('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !username) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }
    res.json({ username });
});
  
  // Create a new session (login)
app.post('/api/session', (req, res) => {
    const { username } = req.body;
    
    if(!users.isValidUsername(username)) {
      res.status(400).json({ error: 'required-username' });
      return;
    }
  
    if(username === 'dog') {
      res.status(403).json({ error: 'auth-insufficient' });
      return;
    }
  
    const sid = sessions.addSession(username);
  
    res.cookie('sid', sid);
    res.json({ username });
});
  
app.delete('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
  
    if(sid) {
      res.clearCookie('sid');
    }
  
    if(username) {
      sessions.deleteSession(sid);
    }
  
    res.json({ wasLoggedIn: !!username });
});

// get logged in user list
app.get('/api/users', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !username) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }

    const users = sessions.getOnlineUsers();
    res.json({ users });
});

// get message
app.get('/api/messages/:channel', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !username) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }
    console.log('1')
    
    // const { channel } = req.params;
    const channel = req.params.channel;
    console.log(channel)
    // const { channel } = req.query; 
    const channelMessages = messages.getMessages(channel);
    console.log(channelMessages)
    res.json(channelMessages);
});

// post message
app.post('/api/messages', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !username) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }
    
    const { message, channel } = req.body;
    // const { channel } = req.params;
    if (!message){
        res.status(400).json({ error: 'required-message' });
        return;
    }

    messages.addMessage({ sender: username, text:  message, channel: channel});
    const channelMessages = messages.getMessages(channel);
    res.json(channelMessages);
});



app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));