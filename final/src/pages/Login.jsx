import { useState } from 'react';
import './Login.css';

// cite: use some sample code
function Login({ onLogin }) {

  const [username, setUsername] = useState('');

  function onChange(e) {
    setUsername(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault(); 
    if(username) {  // Don't allow blank username to try login
      onLogin(username); 
    }
  }

  return (
      <div className="login">
        <h1>Chat</h1>
        <form className="login__form" action="#/login" onSubmit={onSubmit}>
          
            {/* <span>Username:</span> */}
          <input className="login__username" placeholder="Enter username here" value={username} onChange={onChange}/>
          
          <button className="login__button" type="submit">Login</button>
        </form>
      </div>
  );

}

export default Login;