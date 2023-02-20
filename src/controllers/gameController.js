const gameServices = require("../services/gameServices");
const Game = require("../models/modelGame.js")

// This let view all documents in a collection from mongo compass
const getAllGame = (req, res) => {
    Game.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
        console.log(result)
    })
} 


// deja ver todos los documentos de una coleccion de mongo
const getOneGame = (req, res) => {
    const { gameId }= req.params;

    if (!gameId) {
        return;
    }

    Game.findById(GameId, (err, result) => {
        if (err) throw new Error(err);
        res.json(result);
        console.log(result)
    })
    
}

const createNewGame = (req, res) => {
    const { body } = req;

    if(
        !body.gameUserName ||
        !body.gameUserName ||
        !body.gamePasswork ||
        !body.gameCountry
    ) {
        return;
    }
    const newGame = {
        gameName: body.gameName,
        gameUserName: body.gameUserName,
        gamePasswork: body.gamePasswork,
        gameContry: body.gameContry
    }
    
    const createdGame = gameServices.createNewGame(newGame);
        res.status(201).send({ status: "OK", data: createdGame });
}

const updateOneGame = (req, res) => {
    const {
        body,
        params: { gameId },
    } = req;

    if (!gameId) {
        return;
    }

    const  updatedGame = gameServices.updateOneGame(gameId, body);
    res.send({ status: "OK", data: updatedGame });
}

const deleteOneGame = (req, res) => {
    const {
        params: { gamerId },
    } = req;

    if (!gamerId) {
        return;
    }

    gamerServices.deleteOneGame(gameId);
    res.status(204).send({ status: "OK" });
}

module.exports = {
    getAllGame,
    getOneGame,
    createNewGame,
    updateOneGame,
    deleteOneGame
}