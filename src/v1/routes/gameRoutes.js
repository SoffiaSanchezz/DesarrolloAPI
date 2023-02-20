const express = require("express");
const gameController = require("../../controllers/gameController")

const router = express.Router();

router
    .get("/:gameId", gameController.getAllGame)
    .get("/:gameId", gameController.getOneGame)
    .post("/", gameController.createNewGame)
    .patch("/:gameId", gameController.updateOneGame)
    .delete("/:gameId", gameController.deleteOneGame)

module.exports = router;