const messages = [];

function addMessage({ sender, text }) { 
    messages.push({
      sender: sender,
      text: text,
    })
}

function getMessages(){
    return messages;
}

module.exports = {
    addMessage,
    getMessages
}