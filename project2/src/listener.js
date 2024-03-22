import {fetchSession, fetchLogin, fetchLogout, fetchUsers, fetchMessages, fetchAddMessage} from "./services";
import { render, renderUpdates } from './render.js';
import state, {waitOnLogin, login, logout, waitOnUsers, waitOnMessages, setUsers, setMessages, setError} from "./state";

export function handleLogin({ state,  appEl }) {
    appEl.addEventListener('submit', (e) => {
        
        if(!e.target.classList.contains('login-form')) {
            return;
        }
        e.preventDefault();
    
        const username = appEl.querySelector('.username-input').value;
        waitOnLogin();
        render({state, appEl}); 
        setTimeout(() => {
            fetchLogin( username )
            .then(() => {
                login(username);
                waitOnUsers();
                waitOnMessages();
                render({state, appEl}); 
                return Promise.all([fetchUsers(), fetchMessages()]);
            })
            .then(([users, messages]) => {
                setUsers(users);
                setMessages(messages);
                render({state, appEl}); 
            })
            .catch( err => {
                logout();
                setError(err?.error || 'ERROR'); 
                render({ state, appEl });
            });
        }, 1000);
    });
}


export function handleLogout({ state,  appEl }){
    appEl.addEventListener('click', (e) => {
        if(!e.target.classList.contains('logout-btn')) {
          return;
        }

        logout();
        render({ state, appEl });
        fetchLogout() 
        .catch( err => {
          setError(err?.error || 'ERROR'); 
          render({ state, appEl });
        });
    });

}

export function handleSendMsg({ state,  appEl }){
    appEl.addEventListener("submit", (e) =>{
        if(!e.target.classList.contains('send-message-form')){
            return;
        }
        e.preventDefault();
        
        const message = appEl.querySelector('.message-text').value;
      
        fetchAddMessage(message)
        .then((messages) => {
            setMessages(messages);
            render({ state, appEl });
        })
        .catch((err) =>{ 
            setError(err?.error || 'ERROR');
            render({ state, appEl });
        });
    });
}

export function handleRefresh({ state,  appEl }){
    if (!state.isLoggedIn){
        return;
    }

    fetchUsers()
    .then((users) => {
        setUsers(users);
        return fetchMessages();
    })
    .then((messages) => {
        setMessages(messages);
        renderUpdates({ state, appEl });
    })
    .catch(err => {
        setError(err?.error || 'ERROR');
        render({ state, appEl });
    });
}