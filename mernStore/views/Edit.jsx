const React = require('react');

class Edit extends React.Component {
    render() {
        const { game } = this.props;
        return (
            <div>
            <h1>Edit Page </h1>
            <form action={`/games/edit/${game._id}?_method=put`} method="POST">
            <label>Name:</label> <input type="text" name="name" value={game.name} />
             <br />
             <label>Year:</label> <input type="text" name="year" value={game.year} />
              <br />
              <label>Genre:</label> <input type="text" name="genre" value={game.genre} />
               <br />
               <label>System:</label> <input type="text" name="system" value={game.system} />
                <br />
                <label>currentProgressNotes:</label> <input type="text" name="currentProgressNotes" value={game.currentProgressNotes} />
                 <br />
                 <input
                    type="checkbox"
                    checked={game.beaten ? 'checked' : ''}
                    name="beaten"
                />
                  <br />
                   <label>img:</label> <input type="text" name="img" value={game.img} />
                    <br />
                    <input type="submit" name="" value="Edit Game" />
            </form>
            </div>
        );
    }
}

module.exports = Edit;
