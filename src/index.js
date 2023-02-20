//Llamamos las dependencias
const express = require("express");
// Coneccion del mongo
const v1GameRouter = require("./v1/routes/gameRoutes");
const bodyParser = require("body-parser");
require("dotenv").config();

// Este es el conector de mongo
const mongoose = require("mongoose"); 
const cors = require("cors")

//inicializamos express
const app = express();

//definir el puerto
const PORT = process.env.PORT || 3000;
mongoose.set("strictQuery", true);

// Conector de mongo
const conecctionOptions = { useUnifiedTopology: true, useNewUrlParser: true }; 

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


//ruta para que aparesca en el navegador
app.use("/api/v1/Game", v1GameRouter);

//LocalHost de mongo 
mongoose.connect("mongodb://127.0.0.1:", conecctionOptions)
    .then(() => console.log("The conection is OK"))
    .catch((err) => console.log(err));

//lo que se aparecera en consola
app.listen(PORT, () => {
    console.log(`🚀 El servidor esta OK ${PORT}`)
});

process.on('uncaughtException', function (err) {
    console.log(err);
});

