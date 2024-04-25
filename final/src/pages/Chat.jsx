import React, { useState, useEffect } from 'react';
import './Chat.css';

const Chat = ({username, messages, users, getChannelMessages, sendMessage, onLogout}) => {
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);
    const [currChannel, setCurrChannel] = useState('general');
    
    useEffect(() => {
      // Update messageList whenever messages prop changes
      // getChannelMessages(channel);
      setMessageList(messages);
    } , [messages]);

    useEffect(() => {
      // Fetch messages for the initial channel
      getChannelMessages(currChannel);
      setMessageList(messages);
    }, [currChannel]);


    function onChange(e){
      setMessage(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault(); 
        sendMessage(message, currChannel);
        setMessage('');
    }


    function handleLogout(){
        onLogout();
    }

    function renderUserList(users){
      // const usersArray = users.users;

      return (
          <ul className="users">
            {Object.values(users).map((user, index) => (    
              <li key={index} className="user">
                  <span className="username">{user}</span>
              </li>
            ))}
          </ul>
      );
    }

    function renderMessages(){
      if (!messageList){
        return <p>No messages available</p>;

      }
      const messageArray = Object.values(messageList);
      return (
          <ol className="messages">
            {messageArray.map((message, index) => (
              <li className={message.sender === username.username ? 'sent': 'received'} key={index}>
                 <div className="message-content">
                    <p className="sender">{message.sender}</p>
                    <p className="message-text">{message.text}</p>
                </div>
              </li>
            ))}
          </ol>
      );
    }

    return (
        <div className = "chat-app">
          <div className = 'chat-header'>
              <h1>Chat Room</h1>
              <button className="logout-btn" onClick={handleLogout}>
                <span role="img" aria-label="logout">🚪</span> Logout
              </button>
          </div>
          <div className="user-list-container">
                <h2>Online User List</h2>
                <div className="user-list">{renderUserList(users)}</div>
          </div>
          <div>
                <button className={currChannel === 'general' ? 'active-channel' : 'channel'} onClick={() => setCurrChannel('general')}>General</button>
                <button className={currChannel === 'random' ? 'active-channel' : 'channel'} onClick={() => setCurrChannel('random')}>Random</button>
          </div>
          <div className="chat-messages-container">
            <div className="chat-messages">{renderMessages()}</div>
          </div>
          <div className="send-message">
            <form className="send-message-form" onSubmit={onSubmit}>
              <input type="text" 
                    className="message-text" 
                    placeholder="Type your message..." 
                    value={message}
                    onChange={onChange}
              />
              <button type="submit" className="send-message-btn">Send</button>
            </form>
          </div>
        </div>
        
    );
}

export default Chat;