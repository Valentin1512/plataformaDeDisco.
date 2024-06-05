const express = require('express');
const router = express.Router();
const users = require("../models/user");
const hashPassword = require('../hashPassword');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET = 'pledu2024';

router.post("/register", async function(req, res){
    try {
        const { nombre, apellido, email, contrasenia } = req.body;
        const hashedPassword = await hashPassword(contrasenia);

        const newUsuario = new users({
            nombre,
            apellido,
            email,
            contrasenia: hashedPassword
        });

        await newUsuario.save();
        res.status(201).json({ message: 'Usuario creado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
    const { email, contrasenia } = req.body;

    try {
        console.log('Inicio de sesión solicitado para:', email);
        // Buscar usuario por email
        const user = await users.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
        }

        // Comparar contraseñas
        const isMatch = await bcrypt.compare(contrasenia, user.contrasenia);
        if (!isMatch) {
            return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
        }

        // Crear el payload
        const payload = {
            id: user._id,
            nombre: user.nombre,
            apellido: user.apellido,
            email: user.email
        };

        // Generar el token
        const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });

        // Establecer la cookie y responder con el payload
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json(payload);
    } catch (err) {
        console.error('Error en el servidor:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

// * --- BUSCAR USER--- * //
//localhost:5000/users/1234
router.get("/:id", async function(req, res){
    let userId = req.params.id;
    let searchUser = await users.findById(userId).select("-contrasenia");
    console.log(searchUser);
    res.send(searchUser);
});

// * --- EDITAR USER --- * //
router.put("/:id", async function(req, res){
    let userId = req.params.id;
    let nuevosDatos = req.body;
    let user = await users.findByIdAndUpdate(userId, nuevosDatos, { new: true }).select('-contrasenia');
    res.send(user);
});

module.exports = router;


