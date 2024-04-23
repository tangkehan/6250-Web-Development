import { useState, useEffect } from 'react'
import './App.css'
import {
  LOGIN_STATUS,
  CLIENT,
  SERVER,
} from './constants';

import {
  fetchSession,
  fetchLogin,
  fetchLogout,
  fetchUsers,
  fetchMessages,
  fetchAddMessage
} from './services';

import Login from './pages/Login';
import Loading from './Loading';
import Status from './Status';
import Chat from './pages/Chat';


function App() {
  const [ error, setError ] = useState('');
  const [ username, setUsername] = useState('');
  const [ loginStatus, setLoginStatus ] = useState(LOGIN_STATUS.PENDING);
  const [ messages, setMessages ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const [ channel, setChannel ] = useState('general');



  function onLogin(username){
    setLoginStatus(LOGIN_STATUS.PENDING);
    fetchLogin(username)
    .then((username) => {
      setUsername(username);
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      setError('');
      getCurrentInfo();
    })
    .catch( err => {
      setError(err?.error || 'ERROR');
      setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN)
    });

  }

  function onLogout(){
    setError('');
    setUsername('');
    setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN)
    setMessages([]);
    setUsers([]);
    fetchLogout() 
    .catch( err => {
      setError(err?.error || 'ERROR'); 
    });
  }

  function getCurrentInfo(channel){
    return Promise.all([fetchUsers(), fetchMessages(channel)])
      .then(([users, messages]) => {
          setUsers(users);
          setMessages(messages);
      })
      .catch( err => {
        setError(err?.error || 'ERROR');
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN)
      });
  }

  function getChannelMessages(channel){
      return fetchMessages(channel)
      .then(messages => {
        setChannel(channel);
        setMessages(messages);
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN)
      });
  }


  function sendMessage(message, channel){
    fetchAddMessage(message, channel)
    .then((messages) => {
        setMessages(messages);
    })
    .catch((err) =>{ 
        setError(err?.error || 'ERROR');
    });
  }


  function checkForSession(){
    setLoginStatus(LOGIN_STATUS.PENDING);
    fetchSession()
    .then(username => {
      setUsername(username);
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      return getCurrentInfo();
    })
    .catch( err => {
      if( err?.error === SERVER.AUTH_MISSING ) {
        return Promise.reject({ error: CLIENT.NO_SESSION }) // Expected, not a problem
      }
      return Promise.reject(err); // Pass any other error unchanged
    })
    .catch( err => {
      if( err?.error === CLIENT.NO_SESSION ) { // expected "error"
        setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
        // Not yet logged in isn't a reported error
        return;
      }
      // For unexpected errors, report them
      setError(err?.error || 'ERROR')
    }) 
  }

  useEffect(
    () => {
      checkForSession();
    },[]);

  useEffect(() => {
    if (loginStatus === LOGIN_STATUS.IS_LOGGED_IN) {
      const interval = setInterval(() => {
        // console.log(channel)
        getCurrentInfo(channel);
      }, 5000); // Refresh every 5 seconds

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [loginStatus, channel]);

  return (
    <div className="app">
        <main className="main">     
          { loginStatus === LOGIN_STATUS.PENDING && <Loading className="login__waiting">Loading user...</Loading> }
          { loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <Login onLogin={onLogin}/> }
          { loginStatus === LOGIN_STATUS.IS_LOGGED_IN && 
          <Chat username = {username} 
            messages = {messages} 
            users = {users}
            getChannelMessages = {getChannelMessages} 
            sendMessage = {sendMessage} 
            onLogout = {onLogout}/>}
          { error && <Status error={error}/> }
        </main>
    </div>
  )
}

export default App

