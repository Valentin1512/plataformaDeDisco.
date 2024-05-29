const express = require('express');
const router = express.Router();
const Users = require("../models/user");

//ruta para crear un usuario
router.post("/user", async function(req,res){
    let datos = req.body
    let newUsuario = new Users(datos)
    await newUsuario.save();
    res.send("Usuario creado correctamente")
})

//ruta que reciba un id por params y retorne la data del usuario nuevamente, excluyendo la contraseña.
router.get("/:userid",async function(req,res) {
    const userId = req.params.userid;
     await Users.findById(userId).select('-contraseña');
      if (!Users) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.status(200).json({Users}).
     catch (error) 
      res.status(500).json({error: error.message});
})

// ruta para editar los datos de un usuario.
router.put("/:userid",async function(req,res){
    const userId = req.params.userid;
    const updatedUser = req.body;
     await Users.findByIdAndUpdate(userId, updatedUser, { new: true });
      if (!Users) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      res.status(200).json({message: 'Usuario actualizado exitosamente'}).
     catch (error) 
      res.status(500).json({Serror: error.message});
    
})

module.exports = router



