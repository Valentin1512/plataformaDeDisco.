
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
        required: true
    },
    
    coverImage: String,
    cancion: [canciones] // Array de objetos de canciones
});

module.exports = mongoose.model("Albums", album);





/**
 const album= new Schema({
    Titulo:{
        type: String,
        required: true,
        validate: function(value){
           if(value.titulo.trim().length === 0) {
            return "Por favor, ingresa el título del álbum.";
           }
           return true
        }
    },
    Descripcion:{
        type: String,
        required: true,
        validate: function(value){
           if(value.descripcion.trim().length === 0 && this.descripcion.trim().length === 0){
            return "la descripcion tiene que tener un minimo de 5 caracteres y como maximo de 200"
           }
           return true
        }
    },
    AñoDeSalida:{
        type: Number,
        required: true,
        validate: function(value){
            if(!isNaN(value.AñoDeSalida) || this.AñoDeSalida <= 0){
                return "Por favor ingrese un año mayor a cero"
            } 
            return true
        }
    },
    Canciones:[{
        Titulo: String,
        Duracion: String,
        required: true,
        validate: function(value){
           if(value.titulo.trim().length === 0 && value.Duracion.trim().length === 0){
            return "Por favor ingrese un titulo y una duracion mayor a cero"
           } 
           return true
        }
    }],

    Portada:{
        type: URL,
        required: true
    },

    Favoritos:[{
        type: String
    }]
})
 */