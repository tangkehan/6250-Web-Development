import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const isLegalUsername = () => {
        if (!username || !username.match(/^[A-Za-z0-9_]+$/)){
            setError('Invalid username. Only alphabets are allowed.');
            return false;
        }

        if (username.toLowerCase() === 'dog'){
            setError('Dog is not a valid username.');
            return false;
        }
        return true;
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (isLegalUsername()){
            onLogin(username);
        }
    }

    return (
        <div className = 'login-page'>
            <h1>Login</h1>
            <form className = 'login-form' onSubmit = {handleLogin}>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button className = 'login-btn' type = 'submit'>Login</button>
            </form>
            
            {error && <p className = 'error-message'>{error}</p>}
        </div>
    );
};

export default Login;