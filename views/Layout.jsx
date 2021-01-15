const React = require('react');

class Layout extends React.Component {
    render() {
      const logout = (
          <form action="/sessions/?_method=delete" method="post">
              <input type="submit" value="Logout" />
          </form>
      );

        return (
            <html>
                <head>
                <link
                  rel="stylesheet"
                  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                  crossorigin="anonymous"
                  />
                    <title>Games Page</title>

                </head>
                <body style={{'background-color':'#0d1117', }}>
                  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="/games">MernGames</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="/games">All Games <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/games/pc-games">PC Games</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/games/switchgames">Switch</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/games/Xboxgames">Xbox</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/games/Playstationgames">Playstation</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/games/new">Add Games</a>
                      </li>
                      <li class="nav-item">
                      {this.props.username ? ''  : logout }
                      </li>
                    </ul>
                    </div>
                  </nav>

                    {this.props.children}
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
                </body>
            </html>
        );
    }
}

module.exports = Layout;
