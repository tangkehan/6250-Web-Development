//check for existing session
export function fetchSession(){
    return fetch('/api/session')
    .catch(err => Promise.reject({ error: 'network-error' }))
    .then(response => {
    if (!response.ok){
        return response.json().then( err => Promise.reject(err) );
    }
    return response.json(); 
    })
}

export function fetchLogin(username) {
    return fetch('/api/session/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json', 
      },
      body: JSON.stringify( { username } ),
    })
    .catch( err => Promise.reject({ error: 'network-error' }) )
    .then( response => {
    if(!response.ok) { 
        return response.json().then( err => Promise.reject(err) );
    }
    return response.json(); 
    });
}
  
  
export function fetchLogout(){
    return fetch('/api/session', {
      method: 'DELETE'
    })
    .catch(err => Promise.reject({ error: 'network-error' }))
    .then(response => {
    if (!response.ok){
        return response.json().then( err => Promise.reject(err) );
    }
    return response.json(); 
    })
}


export function fetchUsers(){
    return fetch('/api/users')
    .catch(err => Promise.reject({ error: 'network-error' }))
    .then(response => {
    if (!response.ok){
        return response.json().then( err => Promise.reject(err) );
    }
    return response.json(); 
    })
}


export function fetchMessages(channel){
    return fetch(`/api/messages/${channel}`)
    .catch(err => Promise.reject({ error: 'network-error' }))
    .then(response => {
    if (!response.ok){
        return response.json().then( err => Promise.reject(err) );
    }
    return response.json(); 
    })
}



export function fetchAddMessage(message, channel) {
    return fetch('/api/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json', 
      },
      body: JSON.stringify({ message, channel }), 
    })
    .catch( err => Promise.reject({ error: 'network-error' }) )
    .then( response => {
        if (!response.ok) { 
            return response.json().then( err => Promise.reject(err) );
        }
        return response.json(); 
    });
}