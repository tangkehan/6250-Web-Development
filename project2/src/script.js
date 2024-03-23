import { handleLogin, handleLogout, handleSendMsg, handleRefresh} from "./listener"; 
import { SERVER, CLIENT } from './constants';
import {fetchSession, fetchLogin, fetchLogout, fetchUsers, fetchMessages, fetchAddMessage} from "./services";
import state, {waitOnLogin, login, logout, waitOnUsers, waitOnMessages, setUsers, setMessages, setError} from "./state";
import { render } from './render.js';

const appEl = document.querySelector("#app");

render({ state, appEl });
checkForSession({ state,  appEl })
handleLogin({ state,  appEl });
handleLogout({ state,  appEl });
handleSendMsg({ state,  appEl });

setInterval(() => handleRefresh({ state, appEl }), 5000);

function checkForSession({ state,  appEl }){
    fetchSession()
    .then((session) => {
        login(session.username);
        waitOnUsers();
        waitOnMessages();
        render({ state, appEl });
        return Promise.all([fetchUsers(), fetchMessages()]);
    })
    .catch(err => {
        if (err?.error === SERVER.AUTH_MISSING) {
          return Promise.reject({ error: CLIENT.NO_SESSION })
        }
        return Promise.reject(err);
    })
    .then(([users, messages]) => {
        setUsers(users);
        setMessages(messages);
        render({state, appEl}); 
    })
    .catch( err => {
        if( err?.error == CLIENT.NO_SESSION ) { 
            logout(); 
            render({ state, appEl });
            return;
        }
    
        setError(err?.error || 'ERROR'); 
        render({ state, appEl });
    });
}