const React = require('react');

class Layout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Games Page</title>
                </head>
                <body>
                    <h1>NAVBAR HERE</h1>
                    {this.props.children}
                </body>
            </html>
        );
    }
}

module.exports = Layout;