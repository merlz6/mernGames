const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const gameSchema = new Schema({
    name: { type: String, required: true },
    year: String,
    genre: { type: String, required: true },
    system: [String],
    currentProgressNotes:String,
    beaten:Boolean,
    owner:String,
    img:String

}, { timestamps: true });

//  Create Model from our Schema
const Game = mongoose.model('Game', gameSchema);

// Export Fruit Model
module.exports = Game;
