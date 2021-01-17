const React = require('react');

const Layout = require('./Layout.jsx');


class Switchgames extends React.Component {

    render() {


        return (

            <Layout title="Filtered PAGE">
            {this.props.username ? '' : logout}
            <div style={{'text-align':'center'}}>
            <div style={{'display': 'flex', 'flex-direction':'row', 'justify-content':'space-around', 'margin':'50px auto'}}>
            <button style={{'width':'10rem'}}>
              <a href="/games/new">Add game</a>
            </button>
            <h1 style={{'color':'ghostWhite'}}>{this.props.username}'s Switch Games</h1>
            <button style={{'width':'10rem'}} >
              <a href={`/games`}> Back to all games </a>
               </button>
                 </div>
              <ul>

            {this.props.filteredGames.length > 0 ?
                this.props.filteredGames.map(( game, i) => {
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
                                <p class="card-text" style={{'text-align':'left', 'margin-left':'3rem'}}>
                                <span style={{'font-size':'1.25em', 'font-weight':'600', 'width':'150px'}}>   Game Progress: </span> {game.beaten ? ' Game Beaten' : ' Still Playing'}

                                  </p>
                                  <p class="card-text" style={{'text-align':'left', 'margin-left':'3rem'}}>
                                  <span style={{'font-size':'1.25em', 'font-weight':'600', 'width':'150px'}}>   Game Notes: </span> {game.currentProgressNotes}

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
            </Layout>
        );
    }
}

module.exports = Switchgames;
