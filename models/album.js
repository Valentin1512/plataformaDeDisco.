
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const canciones = new Schema({
    titulo: String,
    artista: String,
    duracion: String,
    url: String
});

const album = new Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 200
    },
    anio: {
        type: Number,
        required: true,
        validate: {
            validator: function(v) {
                return v > 0;
            },
            message: 'El año de lanzamiento debe ser mayor a cero.'
        }
    },
    portada:{
        type: String,
    },
    cancion: [canciones] 
});

module.exports = mongoose.model("Albums", album);






