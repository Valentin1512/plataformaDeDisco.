let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let usuarios = new Schema({
    nombre: {
        type: String,
        required: true,
        minLenght: 2,
    },
    apellido: {
        type: String,
        required: true,
        minLenght: 2,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return regex.test(v);
            },
            message: 'Debes ingresar un email válido!'
        }
    },
    contrasenia: {
        type: String,
        required: true,
    },
    favoritos: String,
});

module.exports = mongoose.model("usuarios",usuarios);




/*
let usuario = new Schema({
     Nombre:{
         type: String,
         required: true,
         validate: function(value){
             if(value.Nombre.lenght === 0){
                 return "Por favor, ingresa tu nombre";
            }
             return true

         }
     },
     Apellido:{
         type: String,
         required: true,
         validate: function(value){
             if(value.Apellido.lenght === 0){
                 return "Por favor, ingresa su apellido"
             }
             return true
         }
    },
     Email:{
         type: String,
         required: true,
         validate: {
             validator: function(v) {
               return regex.test(v);
             },
            message:' You must enter a valid email!'
         },
       },
    Contraseña:{
        type: String,
       required: true
    }
 })
 */




