const React = require('react');

class LoginUser extends React.Component {
    render() {
        return (
          <body style={{'background-color': '#212529', 'text-align': 'center', 'color': 'ghostWhite' }} >
            <div style={{'margin':'0 auto'}} >
                <h1 >Login</h1>
                <form action="/sessions/" method="POST" style={{'margin-bottom':'2rem' }}>
                    username: <input type="text" name="username" />
                    <br />
                    password: <input type="password" name="password" />
                    <br />
                    <input type="submit" name="" value="Login" />
                </form>
                <a href="/user/new" style={{'color':'ghostWhite'}}> Create an account </a>

            </div>
            <img src='https://media.comicbook.com/2019/07/consoles-1180861.jpeg' />
            </body>
        );
    }
}

module.exports = LoginUser;
