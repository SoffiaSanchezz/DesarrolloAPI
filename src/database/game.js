const DB = require("./db.json");
const { saveToDataBase } = require("./utils");
const DBMongo = require("../models/modelGame.js"); // Brings the database model for artist

const getAllGames = () => {
    return DBMongo.games;
}

const getOneGame = (gameId) => {
    const game = DBMongo.game.find((game) => game.id === gameId)
    if (!game) {
        return;
    }
    return game;
}

const createNewGame = (newGame) => {
    const isAlreadyAdded =
        DBMongo.games.findIndex((game) => game.gameName === newGame.gameName) > -1;

    if (isAlreadyAdded) {
        return;
    }

    DBMongo.games.push(newGame);
    saveToDataBase(DBMongo);
    return newGame;
}

const updateOneGame = (gameId, gameChanges) => {
    const indexForUpdated = DBMongo.games.findIndex(
        (game) => (game.id = gameId)
    );

    if (indexForUpdated === -1) {
        return;
    }

    const updatedGame = {
        ...DBMongo.games[indexForUpdated],
        ...gameChanges,
    }

    DB.games[indexForUpdated] = updatedGame;
    saveToDataBase(DBMongo);
    return updatedGame;
}

const deleteOneGame = (gameId) => {
    const indexForDeleted = DBMongo.games.findIndex(
        (game) => game.id === gameId
    );

    if ( indexForDeleted === -1 ) {
        return;
    };

    DBMongo.game.splice(indexForDeleted, 1);
    saveToDataBase(DBMongo);
}

module.exports = { getAllGames, getOneGame, createNewGame, updateOneGame, deleteOneGame };