const React = require('react');

const Layout = require('./Layout.jsx');


class Filtered extends React.Component {

    render() {

      
        return (
            <Layout title="INDEX PAGE">
            {this.props.username ? '' : logout}
            <div>
            <nav>
              <a href="/games/new">Add game</a>
            </nav>
              <h1>{this.props.username}'s  Unbeaten Games</h1>
              <button >
              <a href={`/games`}> Back to all games </a>
               </button>
              <ul>
            {this.props.filteredGames.length > 0 ?
                this.props.filteredGames.map(( game, i) => {
                              console.log(game._id);
                              return (
                                  <div>
                                      <img style={{height:'200px'}} src={game.img} /> <br />
                                      <a  href={`/games/${game._id}`}>
                                          {game.name}
                                      </a>
                                      <br />

                                      <a href={`/games/edit/${game._id}`}>
                                          EDIT {game.name}
                                      </a>

                                      <form
                                          action={`/games/${game._id}?_method=DELETE`}
                                          method="post"
                                      >
                                          <input type="submit" value="delete" />
                                      </form>
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

module.exports = Filtered;
