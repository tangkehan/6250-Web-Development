function render(state, rootEl){
    if (!state.username && !state.storedWord){
        rootEl.innerHTML = loginPage();
    }
    else{
        rootEl.innerHTML = wordPage(state.username, state.storedWord);
    }

}

function loginPage(){
    return `
        <div class = "container">
            <h1>Login</h1>
            <label for="username">Username:</label>
            <input type="text" class = "username" placeholder="Please enter your username">
            <button class="login-button">Login</button>
        </div>
    `
}

function wordPage(username, storedWord){
    return `
        <div class = "container">
            <h1>Word Page</h1>
            <p>Username: ${username}</p>
            <p>Stored word: ${storedWord}</p>
            <div class = 'new-word'>
                <label for="newWord">New Word:</label>
                <input type="text" class ="newWord" placeholder="Set your word">
                <button class ="change-word">Change Word</button>
            </div>
            <button class = "logout-button">Logout</button>     
        </div>
    `

}

export default render;