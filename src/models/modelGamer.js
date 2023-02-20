const mongoose  = require("mongoose")

const GamerSchema = new mongoose.Schema({

    // asi estara en mongo / JSON
    //     "gamerId": "String",
    //     "gameId": "String",
    //     "userTitle": "String",
    //     "userYear": "0000",
    //     "level": "0000"
    // },

    gamerId: String,
    gameId: String,
    userTitle: String,
    userYear: Number,
    level: Number
})

module.exports = mongoose.model("GamerModel", GamerSchema)