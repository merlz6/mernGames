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
      //unbeaten games route
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

//PC games route
gameController.get('/pc-games', isAuthenticated, (req, res) => {
    // Use Games model to get all Games

    Game.find({owner:req.session.currentUser}, (error, allGames) => {
        // console.log(req.session);
        // console.log(allGames)
        let filteredGames = allGames.filter(game => game.system.includes('PC'))
        if(filteredGames.length === 0){
          res.render('new2',{
              username: req.session.currentUser,
              system: 'PC'
          })
        }else {
        console.log('PC games from controller' , filteredGames)
        res.render('PCgames', {
            username: req.session.currentUser,
            filteredGames:filteredGames
        });
      }
    });
});
//Switch games route
gameController.get('/switchgames', isAuthenticated, (req, res) => {
    // Use Games model to get all Games

    Game.find({owner:req.session.currentUser}, (error, allGames) => {
        // console.log(req.session);
        // console.log(allGames)
        let filteredGames = allGames.filter(game => game.system.includes('Switch'))
        if(filteredGames.length === 0){
          res.render('new2',{
              username: req.session.currentUser,
              system: 'Switch'
          })
        }else {
        console.log('Switch games from controller' , filteredGames)
        res.render('Switchgames', {
            username: req.session.currentUser,
            filteredGames:filteredGames
        });
      }
    });
});

//Xbox games route
gameController.get('/xboxgames', isAuthenticated, (req, res) => {
    // Use Games model to get all Games

    Game.find({owner:req.session.currentUser}, (error, allGames) => {
        // console.log(req.session);
        // console.log(allGames)
        let filteredGames = allGames.filter(game => game.system.includes('Xbox'))
        if(filteredGames.length === 0){
          res.render('new2',{
              username: req.session.currentUser,
              system: 'Xbox'
          })
        }else {
        console.log('Xbox games from controller' , filteredGames)
        res.render('Xboxgames', {
            username: req.session.currentUser,
            filteredGames:filteredGames
        });
      }
    });
});


//Playstation games route
gameController.get('/playstationgames', isAuthenticated, (req, res) => {
    // Use Games model to get all Games

    Game.find({owner:req.session.currentUser}, (error, allGames) => {
        // console.log(req.session);
        // console.log(allGames)
        let filteredGames = allGames.filter(game => game.system.includes('Playstation'))
        if(filteredGames.length === 0){
          res.render('new2',{
              username: req.session.currentUser,
              system: 'Playstation'
          })
        }else {
        console.log('Playstation games from controller' , filteredGames)
        res.render('Playstationgames', {
            username: req.session.currentUser,
            filteredGames:filteredGames
        });
      }
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

    if (req.body.system.includes(',')){
    req.body.system = req.body.system.split(',')
    }

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
