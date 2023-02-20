const express = require("express");
const gameController = require("../../controllers/gameController")

const router = express.Router();

router
    .get("/", gameController.getAllGames)
    .get("/:gameId", gamesController.getOneGame)
    .post("/", gameController.createNewGame)
    .patch("/:gametId", gameController.updateOneGame)
    .delete("/:artistId", gameController.deleteOneGame)

module.exports = router;