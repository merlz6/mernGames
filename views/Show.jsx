const React = require('react');
const Layout = require('./Layout.jsx');

class Show extends React.Component {
    render() {
       const { name, year, genre, system, currentProgressNotes, beaten, img } = this.props.game;
      return (
        <Layout title="Filtered PAGE">
          <div >
              <h1>Show Games page</h1>
              <img src={img} style={{width:'50%'}} />
              <h3> {name}</h3>
              <h5>Year : {year} </h5>
              <h5>Genre : {genre} </h5>
              <h5>Systen : {system} </h5>
              <h5>Status: {beaten ? "I beat this game" : " Still working on it"} </h5>
              <p>Notes:
              <br/>
              <br/>
              {currentProgressNotes} </p>
              <a href="/Games"> Home </a>
          </div>
          </Layout>
        );
    }
  }

  module.exports = Show;
