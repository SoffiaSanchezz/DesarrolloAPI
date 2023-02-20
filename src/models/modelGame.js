const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    gameName: String,
    gameUserName: String,
    gamePasswork: String,
    gameCountry: String
})

module.exports = mongoose.model("GameModel", GameSchema);