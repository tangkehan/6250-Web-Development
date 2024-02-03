// This object has methods that produce HTML
// - These methods are passed data used to produce the HTML
// - In this case, they are passed the model

const chatWeb = {
  // chatPage() returns the HTML for the page
  // it calls the other methods to generate the HTML for different sections
  chatPage: function(chat) {
    // Fill in/modify anything below!
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" type="text/css" href="/style.css">
        </head>
        <body>
          <div id="chat-app">
            ${chatWeb.getUserList(chat)}
            ${chatWeb.getMessageList(chat)}
            ${chatWeb.getOutgoingSection(chat)}
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function(chat) {
    return `<ol class="messages">` +
      chat.messages.map(message => `
      <li>
        <div class = "message">
          <img class="user-image" src="/images/avatar-${message.sender.toLowerCase()}.jpg" 
            alt="${message.sender}'s Image" >
          <span class = "sender">${message.sender}</span>
          <span class = "text">${message.text}</span>
        </div>
      </li>
      `).join('') +
      `</ol>`;
  },
  getUserList: function(chat) {
    // This is a bit of a complex structure
    // Lookup Object.values() in MDN
    // .map() generates a new array based on calling the callback
    // on each element of the array
    // So this .map() converts the user names to an array of HTML
    // and .join() converts the array of HTML into a single HTML string
    return `<ul class="users">` +
    Object.values(chat.users).map( user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') +
    `</ul>`;
  },
  getOutgoingSection: function() {
    // Generate the HTML for a form to send a message
    return `
      <div class = "getOutgoing">
        <form action="/chat" method="POST">
          <input type = "hidden" name="username" value = "Amit">
          <input id="text" type="text"  name="text" requried>
          <button type="submit">Send</button>
        </form>
      </div>
    `;
  }
};
module.exports = chatWeb;
