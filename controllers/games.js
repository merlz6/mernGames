const express = require('express');
//Creating a Router (Collection of Routes)
const gameController = express.Router();
//Bring Mongoose and Game Schema
const Game = require('../models/games.js');

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
        return next();
    } else {
        res.redirect('/sessions/new');
    }
};

//ROUTES

// routes
// Index
gameController.get('/', isAuthenticated, (req, res) => {
    // Use Games model to get all Games

    Game.find({owner:req.session.currentUser}, (error, allGames) => {
        // console.log(req.session);
        // console.log(allGames)
        let filteredGames = allGames.filter(game => game.beaten ===false)
        console.log('filtered games from controller' , filteredGames)
        res.render('Index', {
            games: allGames,
            username: req.session.currentUser,
            filteredGames:filteredGames
        });
    });
});

gameController.get('/filtered', isAuthenticated, (req, res) => {
    // Use Games model to get all Games

    Game.find({owner:req.session.currentUser}, (error, allGames) => {
        // console.log(req.session);
        // console.log(allGames)
        let filteredGames = allGames.filter(game => game.beaten ===false)
        console.log('filtered games from controller' , filteredGames)
        res.render('Filtered', {
            username: req.session.currentUser,
            filteredGames:filteredGames
        });
    });
});

// New
gameController.get('/new', isAuthenticated, (req, res) => {
    res.render('New');
});

// Create
gameController.post('/', (req, res) => {
    if (req.body.beaten === 'on') {
        req.body.beaten = true;
    } else {
        req.body.beaten = false;
    }
    req.body.owner = req.session.currentUser
    // Use Model to create Game Document
    Game.create(req.body, (error, createdGame) => {
        // Once created - respond to client
        res.redirect('/games');
    });
});



//DELETE ROUTE
gameController.delete('/:id', isAuthenticated, (req, res) => {
    Game.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/games');
    });
});

// Show
gameController.get('/:id', isAuthenticated, (req, res) => {
    // Find the specific document
    Game.findById(req.params.id, (error, foundGame) => {
        // render the Show route and pass it the foundGame
        res.render('Show', {
            game: foundGame,
        });
    });
});

//EDIT
gameController.get('/edit/:id', isAuthenticated, (req, res) => {
    Game.findById(req.params.id, (error, foundGame) => {
        res.render('Edit', { game: foundGame });
    });
});

//UPDATE
gameController.put('/edit/:id', (req, res) => {
  if (req.body.beaten === 'on') {
      req.body.beaten = true;
  } else {
      req.body.beaten = false;
  }
    Game.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/games');
    });
});

////////////

//Export
module.exports = gameController;
