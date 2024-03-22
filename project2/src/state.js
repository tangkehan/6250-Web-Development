import { MESSAGES } from "./constants";

const state = {
    isLoggedIn: false,
    isLoginPending: false,
    isMessagePending: false,
    isUsersPending: false,
    username:'',
    users: {},
    messages: [],
    errorMessage: ""
}

export function waitOnLogin(){
    state.isLoggedIn = false;
    state.isLoginPending = true;
    state.users = {};
    state.messages = [];
    state.errorMessage = '';
}

export function login(username){
    state.isLoggedIn = true;
    state.isLoginPending = false;
    state.isMessagePending = false,
    state.isUsersPending = false,
    state.username = username;
    state.errorMessage = '';
}

export function logout(){
    state.isLoggedIn = false;
    state.isLoginPending = false;
    state.username = '';
    state.users = {};
    state.messages = [];
    state.errorMessage = '';
}

export function waitOnUsers(){
    state.users = {};
    state.isUsersPending = true;
    state.errorMessage = '';
}

export function waitOnMessages(){
    state.messages = [];
    state.isMessagePending = true;
    state.errorMessage = '';
}

export function setUsers(users){
    state.users = users;
    state.isUsersPending = false;
    state.errorMessage = '';
}

export function setMessages(messages){
    state.messages = messages;
    state.isMessagePending = false;
    state.errorMessage = '';
}

export function setError(error) {
    if(!error) {
      state.errorMessage = '';
      return;
    }
    
    state.errorMessage = MESSAGES[error] || MESSAGES.default;
}

export default state;