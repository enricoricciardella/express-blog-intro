
const express = require("express");
const app = express();
// Con USE rendo la cartella public utilizzabile e visualizzabile da tutti

// app.use(express.static("./public"));
app.use(express.static("public"));

// Importato il file Data.js che ci esporta un oggetto con al suo interno l'array delle ricette
const {arrayRicette} = require("./data");
console.log(arrayRicette);

// Preparo il server per metterlo in ascolto alle chiamate API
app.listen(3000, () => {
    console.log("Ascolto...");
});

//Creo una rotta
app.get("/", (request, response) =>{
    console.log("Questo è il server del mio blog");
    response.send("<h1>Ciao vengo dal server</h1>");
});
//Altra rotta
app.get("/Bacheca",(request, response) =>{
    const objFinale = {arrayRicette};
response.json(objFinale);
});

