export function render({ state, appEl }) {
    const html = `
       ${ renderLogin(state) }
       ${ renderChat(state) }
       ${ renderError(state) }
    `;
    appEl.innerHTML = html;
}

function renderLogin(state){
    if (state.isLoggedIn){
        return ``;
    }

    if (state.isLoginPending){
        return `
        <div class="pending">
            <p>Loading Login</p>
        </div>`;
    }

    const loginHtml = `
        <div class = "container">
            <h1>Login</h1>
            <form class="login-form">
                <input type="text" class="username-input" placeholder="Enter your username" id="username">
                <button type="submit" class = 'login-button'>Login</button>
            </form>
        </div>
    `;
    return loginHtml;
}

export function renderChat(state){
    if (!state.isLoggedIn){
        return ``;
    }
    
    return `
        <div id="chat-app">
            <h1>Chat Room</h1>
            <div class="message-input">
                <div>
                    <span>Username: ${state.username}</span>
                </div>
                <div class="information">
                    <div class="user-list-container">
                        <h2>Online User List</h2>
                        <div class="user-list">${getUserList(state)}</div>
                    </div>
                    <div class="chat-messages-container">
                        <h2>Chat Messages</h2>
                        <div class="chat-messages">${getMessages(state)}</div>
                    </div>
                </div>
                <div class = "send-message">
                    <form class = "send-message-form">
                        <input type="text" class="message-text" placeholder="Type your message...">
                        <button type="submit" id="send-message-btn">Send</button>
                    </form>
                <div>
                <button class="logout-btn">Logout</button>
            </div>
        </div>

    `
}

function getUserList(state){
    if (state.isUsersPending){
        return `
        <div class="pending">
            <p>Loading Users</p>
        </div>`;
    }

    return `
        <ul class="users">` +
        Object.values(state.users).map( user => `
        <li>
            <div class="user">
            <span class="username">${user}</span>
            </div>
        </li>
    `).join('') +`</ul>`;
}

function getMessages(state){
    if (state.isMessagePending){
        return `
        <div class="pending">
            <p>Loading Messages</p>
        </div>`;
    }

    return `<ol class="messages">` +
    state.messages.map(message => `
    <li>
      <div class = "message">
        <p class="send-message">${message.sender} : ${message.text}</p>
      </div>
    </li>
    `).join('') +`</ol>`;
}

function renderError(state){
    return `
        <div class="error"><p class="error-message">${state.errorMessage}</p></div>
    `;

}

export function renderUpdates({ state, appEl }){
    const usersEl = appEl.querySelector('.user-list');
    const messagesEl = appEl.querySelector('.chat-messages');
    usersEl.innerHTML = getUserList(state);
    messagesEl.innerHTML = getMessages(state);
}