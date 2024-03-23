const uuid = require('uuid').v4;

const sessions = {};


function addSession(username) {
  const sid = uuid();
  sessions[sid] = {
    username,
  };
  return sid;
}

function getSessionUser(sid) {
  return sessions[sid]?.username;
}

function deleteSession(sid) {
  delete sessions[sid];
}

// helper function to get all the online logged in user
function getOnlineUsers(){
    const onlineUsers = [];
    for (const sid in sessions){
        const username = getSessionUser(sid);
        if (username){
            onlineUsers.push(username);
        }
    }
    return onlineUsers;
}

module.exports = {
  addSession,
  deleteSession,
  getSessionUser,
  getOnlineUsers
};
