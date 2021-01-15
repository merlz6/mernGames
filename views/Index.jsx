const React = require('react');

const Layout = require('./Layout.jsx');


class Index extends React.Component {

    render() {
        const logout = (
            <form action="/sessions/?_method=delete" method="post">
                <input type="submit" value="Logout" />
            </form>
        );
        const filtered = false;
        const { games } = this.props.games;

        const setFilteredGames = (event) => {
          filtered = true
          console.log(filtered)
        }
        return (

            <Layout title="INDEX PAGE">
            {this.props.username ? '' : logout}

            <nav>
              <a href="/games/new">Add game</a>
            </nav>
              <div style={{'text-align':'center'}}>
              <h1 style={{'color':'ghostWhite'}}>{this.props.username}'s Games</h1>
              <button >
              <a href={`/games/filtered`}> Filter Games by Beaten </a>
               </button>
                 <div >
                  <ul style={{'margin':'0 auto', 'padding':'0'}} className="text-center">

                  {this.props.games.length > 0 ?
                    this.props.games.map(( game, i) => {
                              console.log(game._id);
                              return (

                                    <div class="card text-center bg-dark" style={{'width':'400px','margin':'15px auto'}} >
                                      <img class="card-img-top" src={game.img} alt="Card image cap" />
                                      <div class="card-body">
                                      <h5 style={{'color':'ghostWhite'}} class="card-title">{game.name}</h5>
                                      <p style={{'color':'ghostWhite'}} class="card-text">
                                    <span style={{'font-size':'1.25em', 'font-weight':'600'}}>  Year: </span> {game.year} <br/>
                                    <span style={{'font-size':'1.25em', 'font-weight':'600'}}>   Genre: </span> {game.genre}<br/>
                                    <span style={{'font-size':'1.25em', 'font-weight':'600'}}>   Game Progress: </span> {game.beaten ? ' Game Beaten' : ' Still Playing'}

                                      </p>
                                      <div className="buttonHolder" style={{'display': 'flex', 'flex-direction': 'row', 'justify-content':'space-around'}}>
                                      <button class="btn btn-light">
                                      <a style={{'color':'black'}} href={`/games/${game._id}`}>Edit</a>
                                      </button>

                                      <form
                                          action={`/games/${game._id}?_method=DELETE`}
                                          method="post">
                                          <input class="btn btn-light" type="submit" value="Delete" />
                                      </form>
                                      </div>
                                      </div>
                                    </div>




                              );
                          }):
                           '' }
              </ul>
                </div>

            </div>
            </Layout>
        );
    }
}

module.exports = Index;
