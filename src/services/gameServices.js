const {v4: uuid} = require("uuid");
const Game = require("../models/modelGame");

const getAllGames = () => {
    const allGames = Game.getAllGames();
    return allGames;
}

const getOneGame = (gameId) => {
    const uniqueGame = Game.getOneGame(gameId);
    return uniqueGame;
};

const createNewGame = (newGame) => {
    const gameToInsert = {
        ...newGame,
        gameId: uuid()
    }
    const createdGame = Game.createNewGame (gameToInsert);
    return createdGame
}

const updateOneGame = (gameId, changesGame) => {
    const updatedGame = Game.updateOneGame(gameId, changesGame);
    return updatedGame;
}

const deleteOneGame = (gameId) => {
    Game.deleteOneGame(gameId);
}

module.exports = {
    getAllGames,
    getOneGame,
    createNewGame,
    updateOneGame,
    deleteOneGame
}