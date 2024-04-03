import { useState } from 'react'
import Login from './Login';
import Game from './Game';
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const setLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
  };

  const setLogout = () => {
    setLoggedIn(false);
    setUsername('')
  };

  return (
    <div className="app">
      {loggedIn ? (<Game onLogout={setLogout} />) : (<Login onLogin={setLogin} />)}
    </div>
    
  
  )
}

export default App
