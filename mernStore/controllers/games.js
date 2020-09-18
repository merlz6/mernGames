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
        console.log(req.session);
        console.log(allGames)
        res.render('Index', {
            games: allGames,
            username: req.session.currentUser,
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
        res.redirect('/Games');
    });
});



//DELETE ROUTE
gameController.delete('/:id', isAuthenticated, (req, res) => {
    Game.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect('/Games');
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

    Game.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
        res.redirect('/Games');
    });
});

////////////

//Export
module.exports = gameController;
