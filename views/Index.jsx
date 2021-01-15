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


              <div style={{'text-align':'center'}}>
              <div style={{'display': 'flex', 'flex-direction':'row', 'justify-content':'space-around', 'margin':'50px auto'}}>
              <button style={{'width':'10rem'}}>
                <a href="/games/new">Add game</a>
              </button>
              <h1 style={{'color':'ghostWhite'}}>{this.props.username}'s Games</h1>
              <button style={{'width':'10rem'}} >
              <a href={`/games/filtered`}>  Unbeaten Games </a>
               </button>
               </div>

                 <div >
                  <ul style={{'margin':'0 auto', 'padding':'0'}} className="text-center">

                  {this.props.games.length > 0 ?
                    this.props.games.map(( game, i) => {
                              console.log(game._id);
                              return (

                                    <div class="card text-center bg-dark" style={{'width':'30rem','margin':'15px auto'}} >
                                      <img class="card-img-top" style={{'height':'300px'}} src={game.img} alt="Card image cap" />
                                      <div class="card-body" style={{'color':'ghostWhite'}}>
                                      <h5 class="card-title">{game.name}</h5>
                                      <div style={{'display':'flex', 'flex-direction':'row', 'justify-content':'space-around'}}>
                                      <p class="card-text">
                                    <span style={{'font-size':'1.25em', 'font-weight':'600'}}>  Year: </span> {game.year} <br/>
                                    </p>
                                    <p class="card-text">
                                    <span style={{'font-size':'1.25em', 'font-weight':'600'}}>   Genre: </span> {game.genre}<br/>
                                    </p>
                                    </div>
                                    <p class="card-text">
                                    <span style={{'font-size':'1.25em', 'font-weight':'600'}}>   Game Progress: </span> {game.beaten ? ' Game Beaten' : ' Still Playing'}

                                      </p>
                                      <div className="buttonHolder" style={{'display': 'flex', 'flex-direction': 'row', 'justify-content':'space-around'}}>
                                      <button class="btn btn-light">
                                      <a style={{'color':'black'}} href={`/games/edit/${game._id}`}>Edit</a>
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
