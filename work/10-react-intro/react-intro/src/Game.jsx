import React, { useState } from 'react';
import {compare} from './compareWords';

const Game = ({ onLogout }) => {
    const [word, setWord] = useState('');
    const [message, setMessage] = useState('');
    const secretWord = 'RECAT';

    const handleLogout = () => {
        onLogout();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setWord('');
        if (word.length != 5){
            setMessage(`${word} was not a valid word`);
            return;
        }

        const commonLetters  = compare(secretWord, word);
        if (commonLetters === 5){
            setMessage(`${word} is the secret word!`);
        }
        else{
            setMessage(`${word} had ${commonLetters} letters in common`);
        }

    };

    return (
        <div className = 'game-page'>
            <h1>Guess A Word</h1>
            <p>Please guess a word with 5 letters!</p>
            <form className = 'game-form' onSubmit = {handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a 5-letter word"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                />
                <div className = 'button'>
                    <button className = 'submit-btn'>Submit</button>
                    <button className = 'logout-btn' onClick={handleLogout}>Logout</button>
                </div>
            </form>
            {message && <p className = 'error-message'>{message}</p>}
        </div>
    );
};

export default Game;