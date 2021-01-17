const React = require('react');

class NewUser extends React.Component {
    render() {
        return (
          <body style={{'background-color': '#212529', 'text-align': 'center', 'color': 'ghostWhite' }} >
            <div >
                <h4>Please enter new user information below to create an account</h4>
                <form action="/user/" method="POST">
                    username: <input type="text" name="username" />
                    <br />
                    password: <input type="password" name="password" />
                    <br />
                    <input type="submit" value="Create User" />
                </form>
            </div>
            </body>
        );
    }
}

module.exports = NewUser;
