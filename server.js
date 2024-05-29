const express = require("express");
let app = express();
const PORT = 3000;
const mongoose = require('mongoose')
const path = require("path");
const cors = require("cors");
//app.use(bodyParser.urlencoded({extended: true}));
// Middleware para parsear JSON y datos URL-encoded
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://valentin78:Indio1812@cluster0.mkbqpku.mongodb.net/PlataformaDisco2024?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.log(err));

//Importar las rutas
const usersRouter = require('./routes/users');
const albumsRouter = require('./routes/albums');

app.use(express.static(path.join(__dirname, "Public")));
// Usar las rutas
app.use("/users", usersRouter);
app.use("/albums", albumsRouter);


//Inicio servidor en puerto 3000
app.listen(PORT, function(){
    console.log("********************************");
    console.log("SERVIDOR INICIADO EN PUERTO 3000");
    console.log("********************************");
});






































/* 
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/index');
const PORT = 3000;

app.use(express.static(path.join(__dirname, "Public")));
app.use(cors());
app.use(express.json());
app.use('/', routes);

mongoose.connect("mongodb+srv://valentin78:Indio1812@cluster0.mkbqpku.mongodb.net/PlataformaDisco2024?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log("#######################################");
  console.log("Servidor funcionando en el puerto 3000");
  console.log("#######################################");
});
*/
