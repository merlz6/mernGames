const React = require('react');
const Layout = require('./Layout.jsx');

class New extends React.Component {
    render() {
      return (
        <Layout title="Filtered PAGE">
          <div>
              <h1>New Games page</h1>
              <form action="/games" method="POST">
                  Name: <input type="text" name="name" /><br/>
                  Year: <input type="text" name="year" /><br/>
                  Genre: <input type="text" name="genre" /><br/>
                  System: <input type="text" name="system" /><br/>
                  Current Progress Notes: <input type="text" name="currentProgressNotes" /><br/>
                  Beaten:<input type="checkbox" name="beaten" /><br/>
                  Image Link: <input type="text" name="img" /><br/>
                  <input type="submit" name="" value="Create Game"/>
                </form>
          </div>
          </Layout >
        );
    }
  }

  module.exports = New;
