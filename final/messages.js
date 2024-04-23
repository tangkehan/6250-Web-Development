// const messages = [];

// function addMessage({ sender, text }) { 
//     messages.push({
//       sender: sender,
//       text: text,
//     })
// }

// function getMessages(){
//     return messages;
// }



const messages = {};


function addMessage({ sender, text, channel }) { 
    if (!messages[channel]){
        messages[channel] = [];
    }

    messages[channel].push({
      sender: sender,
      text: text,
    })
}

function getMessages(channel){
    return messages[channel] || [];
}

function deleteChannelMessages(channel){
    delete messages[channel];
}

module.exports = {
    addMessage,
    getMessages,
    deleteChannelMessages
}