// webPage() returns the HTML for the page
const webPages = {

    loginPage: function(){
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" type="text/css" href="/styles.css">
                <title>Login</title>
            </head>
            <body>
                <div class = "container">
                    <h1>Login</h1>
                    <form action="/login" method="POST">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username">
                        <button type="submit">Login</button>
                    </form>
                </div>
            </body>
            </html>
        `;
    },


    loginErrorPage: function(){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" type="text/css" href="/styles.css">
            <title>Login Error</title>
        </head>
        <body>
            <div class = "container">
                <h1>Login Error</h1>
                <p>Vaild username can only be made up with numbers or letters only.</p>
                <p>An empty username or the username "dog" is not allowed.<p>
                <a href="/">Back to login</a>
            </div>
        </body>
        </html>

        `;
    },

    dataPage: function(username, storedWord){
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" type="text/css" href="/styles.css">
            <title>Home Page</title>
        </head>
        <body>
            <div class = "container">
                <h1>Data Page</h1>
                <p>Username: ${username}</p>
                <p>Stored word: ${storedWord}</p>
                <form action="/change" method="POST">
                    <label for="newWord">New Word:</label>
                    <input type="text" id="newWord" name="newWord">
                    <button type="submit">Change Word</button>
                </form>
                <form action="/logout" method="POST">
                    <button type="submit">Logout</button>
                </form>
            </div>
        </body>
        </html>
        `;
    }
}

module.exports = webPages;